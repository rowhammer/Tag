module.exports.run = async (Tag, msg, args) => {
        if (msg.author.id === "391736039879999489") {
            msg.guild.members.forEach(n => {
                try {
                    n.setNickname("")
                    console.log(`Reset nickname of ${n.user.username}`)
                } catch (e) {
                    console.log(`Nickname of ${n.user.username} was not reset`)
                }
            })
        }
    }

module.exports.help = {
    name: 'resetnick'
}

module.exports.conf = {
    aliases: ['clearnick'],
    isEnabled : true
}