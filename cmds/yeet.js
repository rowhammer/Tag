module.exports.run = async(Tag, msg, args) => {
    msg.delete();
    msg.channel.send('YEET', {
        files: [
            './res/yeet.jpg'
        ]
    })
}

module.exports.help = {
    name: 'yeet'
}

module.exports.conf = {
    aliases: ['yeeft']
}