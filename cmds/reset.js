const config = require('../config.json');
module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === '391736039879999489' || msg.author.id === '143129339066580993' || msg.author.id === '236243553569865728' || msg.author.id === '175347895380213760' || msg.author.id === '391743942070370304' || msg.author.id === '165126937952387072' || msg.author.id === '207141112647909376' || msg.author.id === '342180964975247383' || msg.author.id === '246980481743192065' || msg.author.id === '184377805859979264') {
        const Discord = require('discord.js');
        let toReset = args.slice(0).join(` `);
        let tagchan = msg.guild.channels.find('name', 'bot_log')
        // msg.channel.send(toReset);
        const request = require('request');
        console.log('Starting...')
        if (!toReset) return msg.channel.send('Need to know who to reset');
        request(`https://www.hydrogenmods.co.uk/Authentication/HWID/ResetUserHWID2.php?username=${toReset}`, function (error, response, body) {
            if (body === 'HWID Already Reset' || body === 'User Not Found') {
                const failembed = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setAuthor('HWID Reset', msg.guild.iconURL)
                    .setDescription(`started by ${msg.author.username}`)
                    .addField('User', toReset, true)
                    .addField('Result', `${body}`, true)
                    .setFooter(`A 'User Not Found' error likely means the user is not yet in the database`)
                if (error) {
                    msg.channel.send('An error occurred, check console')
                    console.log(error)
                } else msg.channel.send({
                    embed: failembed
                });
                if (tagchan) tagchan.send(`**${toReset} was attemped a HWID reset by ${msg.author.username} which failed with error: ${body}**`)
                else msg.channel.send(`**${toReset} was attemped a HWID reset by ${msg.author.username} which failed with error: ${body}**`)
            } else {
                const successembed = new Discord.RichEmbed()
                    .setColor(0x00ff00)
                    .setAuthor('HWID Reset', msg.guild.iconURL)
                    .setDescription(`started by ${msg.author.username}`)
                    .addField('User', toReset, true)
                    .addField('Result', `Success! Reset Amount: ${body}`, true)
                console.log(body)
                if (error) {
                    msg.channel.send('An error occurred, check console')
                    console.log(error)
                } else msg.channel.send({
                    embed: successembed
                })
                if (tagchan) tagchan.send(`**${toReset} was attemped a HWID reset by ${msg.author.username} which succeeded**`)
                else msg.channel.send(`**${toReset} was attemped a HWID reset by ${msg.author.username} which succeeded**`)
            }
            // console.log(response)
            console.log('Ending...');
        })
        console.log('Ended')
    } else {
        msg.delete();
        msg.channel.send('Pffff nah fam, ain\'t giving ya that sort of power').then(message => {
            message.delete(5000)
        });
        return;
    }
}



module.exports.help = {
    name: 'reset'
}