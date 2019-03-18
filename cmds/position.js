module.exports.run = async (Tag, msg, args) => {
    msg.channel.send(`Channel: *${msg.channel.name}* has position: **${msg.channel.position}**`)
}

module.exports.help = {
    name: 'position'
}

module.exports.conf = {
    aliases : ['pos']
}