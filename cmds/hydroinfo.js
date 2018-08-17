module.exports.run = async (Tag, msg, args) => {
    if (msg.guild.id === '473223354330120203') {
        var request = require('request');
        request('https://www.hydrogenmods.co.uk/Authentication/Discord/GetMonthly.php', function (err, response, body) {
            if (err) {
                msg.channel.send('Nah fam, can\'t see shit');
            } else {
                let Discord = require("discord.js")
                var hextext = Math.floor(Math.random() * 16777215).toString();
                var infoChannel = msg.guild.channels.find("name", "staff")
                body.split(/[ ,]+/);
                var monthly = body[0] + body[1] + body[2];
                var lifetime = body[4] + body[5] + body[6] + body[7];
                var total = parseInt(monthly) + parseInt(lifetime);
                var author = msg.author;
                let server = msg.guild;
                var roles = new Array();
                for (var [flake, role] of server.roles) {
                    roles.push(role.toString());
                }
                const infoSend = new Discord.RichEmbed()
                    .setColor(3447003)
                    .setThumbnail(server.iconURL)
                    .setAuthor(server.name, author.avatarURL)
                    .addField('Total Discord Members', server.memberCount, true)
                    .addField('Monthly Users', monthly, true)
                    .addField('Lifetime Users', lifetime, true)
                    .addField('Menu Users', total, true)

                    // .addField("Roles [" + roles.length + "]", roles.join("\t"), false)

                    .setTimestamp()
                infoChannel.send({
                    embed: infoSend
                })
                console.log(`${author.username} requested Hydrogen info`)
            }
        })
    } else {
        msg.delete();
    }
}
module.exports.help = {
    name: "hydroinfo"
}