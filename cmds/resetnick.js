module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === "391736039879999489") {
        msg.guild.members.forEach(n => {
            try {
                n.setNickname("")
            } catch (e) {}
        })

    }
}

module.exports.help = {
    name: 'resetnick'
}