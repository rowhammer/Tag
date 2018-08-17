module.exports.run = async(Tag, msg, args) => {
    msg.channel.send(`Good morning ${msg.author.username}!`).then(msg.react("🌞"))

}

module.exports.help = {
    name: "morning"
}