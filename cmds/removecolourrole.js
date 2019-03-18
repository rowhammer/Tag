module.exports.run = async (Tag, msg, args) => {
    if (msg.member.hasPermission("MANAGE_ROLES")) {
        const guild = msg.guild;
        const toRemove = msg.guild.roles.find("name", args[0])
        if (!toRemove) return msg.channel.send('Role doesn\'t exist').then(message => message.delete(5000))
        else if (toRemove) toRemove.delete().catch(console.error).then(msg.channel.send(`${toRemove.name} deleted`)).then(message => message.delete(5000))
    } else return msg.channel.send(':joy:')
}

module.exports.help = {
    name: 'removecolourrole'
}

module.exports.conf = {
    aliases : ['rcr']
}