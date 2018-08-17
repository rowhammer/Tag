module.exports.run = async(Tag, msg, args) => {
    var Uptime = Tag.uptime
    Uptime = 1000 * Math.round(Uptime / 1000);
    var d = new Date(Uptime)
    msg.channel.send(`Been alive for ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`);
    console.log(d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getUTCSeconds());
}

module.exports.help = {
    name: "uptime"
}