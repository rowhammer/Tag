module.exports.run = async (Tag, msg, args) => {
    try {
        const snek = require('snekfetch')
        const {body} = await snek.get('https://api.thedogapi.co.uk/v2/dog.php?limit=1');
        await msg.channel.send(`*Fetching random dog for ${msg.author.username}...*`, {
            files: [{
                attachment: body.data[0].url,
                name: `${body.data[0].id}.jpg`
            }]
        });
        await msg.delete();
    } catch (error) {
        throw error;
    }
}

module.exports.help = {
    name: 'dog'
}