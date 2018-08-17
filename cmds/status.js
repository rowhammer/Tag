module.exports.run = async(Tag, msg, args) => {
    Tag.user.setPresence({
        game: {
            type: 1
        }
    });
}

module.exports.help = {
    name: 'status'
}