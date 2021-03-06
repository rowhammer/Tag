module.exports.run = async (Tag, msg, args) => {
    if (msg.member.hasPermission("MANAGE_ROLES")) {
        const guild = msg.guild;
        const name = args[0];
        const color = args[1];
        console.log(name);
        console.log(color);
        if (!args[0]) return msg.channel.send('Specify name').then(m => m.delete(5000));
        if (!color) return msg.channel.send('Specify colour').then(m => m.delete(5000));
        const emcolor = color.substr(1)
        console.log(emcolor);
        msg.delete();

        try {
            guild.createRole({
                name: `${name}`,
                color: `${color}`
            })
            msg.channel.send({
                embed: {
                    color: parseInt(emcolor, 16),
                    author: {
                        name: `Role created: ${name}`,
                        icon_url: msg.author.avatarURL
                    },
                    timestamp: new Date(),
                    footer: {
                        icon_url: Tag.user.avatarURL
                    }
                }
            }).then(message => message.delete(5000))
        } catch (e) {
            msg.channel.send(`Failed making role: ${e}`).then(message => message.delete(5000));
            console.log(`Failed making role ${e}`)
        }
    } else return msg.channel.send(':joy:')
}

module.exports.help = {
    name: 'addcolourrole',
    description: 'Creates a colour role on the server',
    usage:'acr [name] [colour]'
}

module.exports.conf = {
    aliases: ['acr', 'addcr']
}

