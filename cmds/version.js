module.exports.run = async(Tag, msg, args) => {
    var request = require('request');
    request('https://www.hydrogenhacks.co.uk/Authentication/Detection/CheckVersion.php?Type=2', function(error, response, body ) {
		msg.channel.send(`The latest version of Hydrogen is **${body}**`)
        console.log(`${body} is the latest version`);
		})
}

module.exports.help = {
    name: "version"
}

module.exports.conf = {
    aliases: ['v']
}