module.exports.run = async (Tag, msg, args) => {
    try {
        const snek = require('snekfetch')
        const {body} = await snek.get('https://dog.ceo/api/breeds/image/random');
        await msg.channel.send(`*Fetching random dog for ${msg.author.username}...*`, {
            files: [{
                attachment: body.message,
                name: `${body.message}.jpg`
            }]
        });
        await msg.delete();
    } catch (error) {
        throw error;
    }
}

module.exports.help = {
    name: 'dog',
    description: 'Sends a picture of a dog, obvs',
    usage: 'dog'
}

module.exports.conf = {
    aliases: ['pooch']
}