module.exports.run = async(Tag, msg, args) => {
    var roll = Math.floor(Math.random() * 6) + 1;
    msg.reply("You rolled a " + roll)
    console.log(`${msg.author.username} rolled a ${roll}`);
}

module.exports.help = {
    name: "roll"
}

module.exports.conf = {
    aliases: ['dice']
}