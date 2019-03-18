module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === "391736039879999489") {
        var role = args.slice(1).join(" ");
        msg.guild.members.forEach(m => {
            try {
                m.removeRole(role);
            } catch (e) {}
        })
    }
}

module.exports.help = {
    name: "roleall"
}

module.exports.conf = {
    aliases: ['removeallroles']
}