module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === '391736039879999489') {
        const sends = args.slice(0).join(` `);
        let messagesend = sends.slice(22);
        let person = msg.mentions.members.first();
        msg.delete();
        person.send(messagesend);
    }
}

module.exports.help = {
    name: 'pm'
}

module.exports.conf = {
    aliases : ['say']
}