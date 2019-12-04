module.exports.run = async(Tag, msg, args) => {
    let totalSeconds = (Tag.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    msg.channel.send({embed: {
        color: 3447003,
        author: {
            name: `Uptime for ${Tag.user.username}`,
            icon_url: Tag.user.avatarURL
        },
        fields: [{
            name: `${days} days ${hours}:${minutes}:${seconds}`,
            value: "Since"
        }],
        timestamp: Date.now()
    }})
    console.log(`${days} days ${hours}:${minutes}:${seconds}`)
}

module.exports.help = {
    name: "uptime"
}

module.exports.conf = {
    aliases: ['alive']
}