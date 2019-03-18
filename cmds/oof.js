module.exports.run = async(Tag, msg, args) => {
    msg.delete();
    msg.channel.send(`**OOF** *from ${msg.author.username}*`, {
        files: [
            './res/oof.png'
        ]
    })
}

module.exports.help = {
    name: 'oof'
}

module.exports.conf = {
    aliases : ['roblox']
}