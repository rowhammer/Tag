module.exports.run = async (Tag, msg, args) => {
    var request = require('request');
    if (msg.author.id === '391736039879999489') {
        request('https://www.hydrogenmods.co.uk/Authentication/Detection/CheckVersion.php?Type=2', function (error, response, body1) {
            request('https://www.hydrogenmods.co.uk/Authentication/Discord/GetMonthly.php', function (err, response, body2) {
                const Discord = require('discord.js');
                var monthly = body2[0] + body2[1] + body2[2];
                var lifetime = body2[4] + body2[5] + body2[6] + body2[7];
                var givers = body2[8] + body2[9];
                var total = parseInt(monthly) + parseInt(lifetime) + parseInt(givers);
                const reqsend = new Discord.RichEmbed()
                    .setColor(0xff00ff)
                    .setAuthor(`Total Site Users`, msg.author.avatarURL)
                    .addField('Monthly', monthly, true)
                    .addField('Lifetime', lifetime, true)
                msg.channel.send({
                    embed: reqsend
                })
                console.log(`H: ${body1} | U: ${total}`)
                console.log(body1);
                console.log(body2);
            })
        })
    }
}

module.exports.help = {
    name: 'req'
}

module.exports.conf = {
    aliases : ['request']
}