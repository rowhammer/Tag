module.exports.run = async(Tag, msg, args) => {
    if (msg.author.id === '391736039879999489' ) {
    msg.guild.pruneMembers(30, true)
        .then(pruned => msg.channel.send(`This will prune ${pruned} members`))
        .catch(console.error);
    }
}

module.exports.help = {
    name: "prune"
}

module.exports.conf = {
    aliases : ['pr']
}