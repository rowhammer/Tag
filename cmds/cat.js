module.exports.run = async (Tag, msg, args) => {
    const Discord = require('discord.js');
    const {
        get
    } = require("snekfetch");
    msg.delete();
    // if (msg.author.id === '246980481743192065') return msg.channel.send(`You know what ${msg.author.username}? No.`);
    try {
        get('https://aws.random.cat/meow').then(res => {
            return msg.channel.send(`*Fetching random cat for ${msg.author.username}*`,{
                files: [{
                    attachment: res.body.file
                    // name: `cat.${res.body.file.split('.')[2]}`
                }]
            });
        });
    } catch (err) {
        return msg.channel.send(error.stack);
    }
}
module.exports.help = {
    name: 'cat'
}