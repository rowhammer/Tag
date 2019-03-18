module.exports.run = async(Tag, msg, args) => {
    if (msg.author.id === '391736039879999489') {
        msg.delete();
        msg.channel.startTyping();
        setTimeout(() => {
            msg.channel.stopTyping()
        }, 10000);
    }
}

module.exports.help = {
    name: 'type'
}

module.exports.conf = {
    aliases: ['typing']
}