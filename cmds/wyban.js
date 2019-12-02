module.exports.run = (Tag, msg, args) => {
    msg.delete();
    msg.channel.send({
        files: [
            "./res/wyban.jpg"
        ]
    })
}

module.exports.help = {
    name: "wyban",
    description: 'does the thing'
}

module.exports.conf = {
    aliases: ['wyban']
}