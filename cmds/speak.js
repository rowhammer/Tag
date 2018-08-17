module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === '391736039879999489') {
        const toSay = args.slice(0).join(' ');
        msg.delete();
        msg.channel.send(toSay);
    } else {
        msg.delete();
        msg.author.send(`No ${msg.author.username}`);
    }
}

module.exports.help = {
    name: 'speak'
}
