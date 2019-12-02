module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === "391736039879999489") {
        const person = msg.mentions.members.first();
        const changed = args.slice(1).join(' ');
        console.log(`${person} , ${person.user.id}, ${person.user.username}, ${person.user.tag}`)
        if (msg.member.hasPermission(['MANAGE_MESSAGES'])) {
            if (person.user.id == '391750832422518795' && msg.author.id !== '391736039879999489') {
                msg.delete();
                msg.channel.send('Nice try :wink:')
                return;
            }
            if (!changed) {
                person.setNickname('')
                console.log(`Reset nickname for ${person}`)
                msg.delete();
            } else {
                person.setNickname(changed);
                console.log(`Set ${person.user.username}'s nickname to ${changed}`);
                msg.delete();
            }
        }
    } else return
}
module.exports.help = {
    name: 'nick',
    description: 'Sets a users nickname',
    usage: 'nick @person nickname'
}

module.exports.conf = {
    aliases: ['n']
}