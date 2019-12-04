module.exports.run = async (Tag, msg, args) => {
    if (msg.member.hasPermission("MANAGE_ROLES")) {
        const guild = msg.guild;
        const name = args[0];
        const color = args[1];
        console.log(name);
        console.log(color);
<<<<<<< HEAD
        if (!args[0]) return msg.channel.send('Specify name').then(m => m.delete(5000));
        if (!color) return msg.channel.send('Specify colour').then(m => m.delete(5000));
        const emcolor = color.substr(1)
        console.log(emcolor);
        msg.delete();

=======
        const emcolor = color.substr(1)
        console.log(emcolor);
        msg.delete();
>>>>>>> 7dbe95bb8e8378f95d2ee7a9287f922e3907d670
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
<<<<<<< HEAD
    usage:'acr [name] [colour]'
=======
    usage:' acr [name] [colour]'
>>>>>>> 7dbe95bb8e8378f95d2ee7a9287f922e3907d670
}

module.exports.conf = {
    aliases: ['acr', 'addcr']
}

