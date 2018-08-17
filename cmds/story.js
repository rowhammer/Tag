module.exports.run = async(Tag, msg, args) => {
    const Discord = require('discord.js')
    const request = require('snekfetch');
    const HTMLParser = require('fast-html-parser');
    try {
        const reply = await msg.channel.send('```Searching for a random FML card (this can take a few seconds)```');
        const res = await request.get('http://www.fmylife.com/random');
        const root = HTMLParser.parse(res.text);
        const article = root.querySelector('.block a');
        const downdoot = root.querySelector('.vote-down');
        const updoot = root.querySelector('.vote-up');
        const href = root.querySelector('.panel-content p.block a');
        const card = root.querySelector('.panel-content div.votes span.vote div');
        const signature = root.querySelector('.panel div.text-center');
        const link = 'http://www.fmylife.com' + href.rawAttrs.replace(/^href=|"/g, '');
        const cardId = card.rawAttrs.replace(/\D/g, '');
        let signatureDisplay = 'Author and date of this fml unkown';
        if (signature.childNodes.length === 1) {
            signatureDisplay = signature.childNodes[0].text;
        } else if (signature.childNodes.length === 3) {
            signatureDisplay = signature.childNodes[0].text.replace('-', '/') + signature.childNodes[2].text.replace('/', '');
        }

        if (article.childNodes[0].text.length < 5) {
            return msg.channel.send('Today, something went wrong, so you\'ll have to try again in a few moments. FML');
        }
        const storysend = new Discord.RichEmbed()
            .setTitle(`FML #${cardId}`)
            .setURL(link)
            .setColor(165868)
            .setAuthor(Tag.user.username, Tag.user.avatarURL)
            .setThumbnail('http://i.imgur.com/5cMj0fw.png')
            .setDescription(`_${article.childNodes[0].text}\n\n_`)
            .addField('I agree, your life sucks:', updoot.childNodes[0].text, true)
            .addField('You deserved it', downdoot.childNodes[0].text, true)
            .setFooter(signatureDisplay)
        reply.edit({
            embed: storysend
        })

    } catch (error) {
        throw error;
    }
}
module.exports.help = {
    name: 'story'
}