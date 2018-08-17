module.exports.run = async(Tag, msg, args) => {
    if (msg.author.id === '391736039879999489') {
        const newUsername = args.slice(1).join(' ');
        Tag.user.setUsername(newUsername).then(console.log(`New username of ${newUsername} is applied`)).catch(console.error);
    }
}

module.exports.help = {
    name: 'rename'
}