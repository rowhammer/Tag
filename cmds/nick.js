module.exports.run = async (Tag, msg, args) => {
    const person = msg.mentions.members.first();
    const changed = args.slice(1).join(' ');
    if (msg.author.id === '391736039879999489') {
        if (!changed) {
            person.setNickname('')
            msg.delete();
        } else {
            person.setNickname(changed);
            msg.delete();
        }
        console.log(`Set ${person.user.username}'s nickname to ${changed}`);
    }
}

module.exports.help = {
    name: 'nick'
}