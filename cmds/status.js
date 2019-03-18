module.exports.run = async (Tag, msg, args) => {
    const Discord = require('discord.js');
    const request = require('request');
    request('https://www.hydrogenmods.co.uk/hydro_auth/menu_information/menu_status.php', function (error, repsonse, body) {
        msg.delete();
        let colour;
        let status;
        let title;
        if (error) status = "Site cannot be reached..."
        switch (body) {
            case '0':
                color = 0x00ff00;
                title = 'UP'
                status = `Hydrogen is up for everyone!`;
                break;
            case '1':
                title = 'TESTERS'
                colour = 0xffa500
                status = `Hydrogen is available to testers only, please be patient`
                break;
            case '2':
                title = "UP"
                colour = 0x00ff00;
                status = `Hydrogen is up for all customers! No Tester version is available`
                break;
            case '3':
                title = "DOWN"
                colour = 0xff0000;
                status = `Hydrogen is currently down for everyone. Please be patient`
                break;
        }
        const statusEmbed = new Discord.RichEmbed()
            .setAuthor(title, msg.guild.iconURL)
            .setURL('https://www.hydrogenmods.co.uk/arewedown.php')
            .setColor(colour)
            .setTitle(status)
            .setFooter(`requested by ${msg.author.username}`)
            .setTimestamp()
        msg.channel.send({
            embed: statusEmbed
        });
        console.log(status);
    });
}

module.exports.help = {
    name: 'status',
    description: 'Checks Hydrogen access level',
    usage: 'status'
}

module.exports.conf = {
    aliases: ['st']
}