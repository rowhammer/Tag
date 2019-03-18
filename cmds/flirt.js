module.exports.run = async(Tag, msg, args) => {
    config = require('../config.json')
    //  const flirtchan = msg.guild.channels.find("name", "memes");
    let flirts = config.flirts;
    let flirtsend = flirts[Math.floor(Math.random() * flirts.length)];
    msg.delete();
    msg.channel.send(flirtsend)
    console.log(`Flirted with ${msg.author.username}`)
}
module.exports.help = {
    name: "flirt"
}

module.exports.conf = {
    aliases : ['sexytimes']
}