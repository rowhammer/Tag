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
<<<<<<< HEAD
    name: "roleall",
    description: "Removes all roles from the server",
    usage: "roleall"
=======
    name: "roleall"
>>>>>>> 7dbe95bb8e8378f95d2ee7a9287f922e3907d670
}

module.exports.conf = {
    aliases: ['removeallroles']
}