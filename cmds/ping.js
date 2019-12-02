module.exports.run = async(Tag, msg, args) => {
    msg.channel.send("Ping?").then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(Tag.ping)}ms`));
    console.log(`Sent pong in reply to ${msg.author.username}`);
}

module.exports.help = {
    name: "ping"
}

module.exports.conf = {
    aliases : ['ms']
}