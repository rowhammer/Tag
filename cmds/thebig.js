module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === "391736039879999489") {
        Tag.user.setUsername("Tag").then(console.log(`Username is now ${Tag.user.username}`))
    }
}

module.exports.help = {
    name: "thebig"
}