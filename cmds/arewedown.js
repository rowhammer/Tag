module.exports.run = async (Tag, msg, args) => {
    // if (msg.member.hasPermission("ADMINISTRATOR")) {
    var webshot = require('node-webshot');
    var options = {
        renderDelay: 2000
    }
    var screenshot = "hydrogenmods.co.uk/arewedown.php";
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
// }



module.exports.help = {
    name: "arewedown"
}