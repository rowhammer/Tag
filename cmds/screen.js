module.exports.run = async (Tag, msg, args) => {
    if (msg.member.hasPermission("ADMINISTRATOR")) {
        var webshot = require('node-webshot');
        var options = {
            renderDelay: 5000
        }
        var screenshot = args.join(' ');
        webshot(screenshot, `./dump/${screenshot}.png`, options, function (err) {
            msg.channel.send({
                    files: [{
                        attachment: `./dump/${screenshot}.png`,
                        name: `${screenshot}.png`
                    }]
                })
                .catch(console.error);
        });
    }
}


module.exports.help = {
    name: "screen"
}