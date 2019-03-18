module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === '391736039879999489') {
        if (!args) {
            message.channel.send(`Owner of ${msg.guild.name} is ${msg.guild.owner}`)
        } else if (args[0]) {
            let person = msg.mentions.members.first()
            msg.guild.setOwner(person)
            msg.channel.send(`New Owner of ${msg.guild.name} is ${person}`)

        }
    }
}

module.exports.help = {
    name: 'owner'
}

module.exports.conf = {
    aliases : ['theking']
}