module.exports.run = async(Tag, msg, args) => {
    msg.channel.send(`Good evening ${msg.author.username}!`).then(msg.react("🌙"))
}

module.exports.help = {
    name: 'evening'
}

module.exports.conf = {
    aliases: ['ev']
}