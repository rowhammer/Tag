module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === "391736039879999489") {
        msg.delete();
        if (msg.contains('we could') || msg.contains('We could') || msg.contains(' we could')) {
            msg.channel.send(`**bUt ArE wE GoNnA???**`, {
                files: [
                    './res/rwegonna.gif'
                ]
            })
        }
    }
}

module.exports.help = {
    name: 'arewegonna'
}

module.exports.conf = {
    aliases: ['awg', 'gonna']
}