module.exports.run = async(Tag, msg, args) => {
    msg.channel.send(`Good afternoon ${msg.author.username}!`).then(msg.react("🌞"))

}

module.exports.help = {
    name: "afternoon",
    description: 'Good afternoon',
    usage: 'afternoon'
}

module.exports.conf = {
    aliases: [`aft`]
}