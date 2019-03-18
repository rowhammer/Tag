module.exports.run = async(Tag, msg, args) => {
    const Discord = require('discord.js');
    msg.channel.send('Can\'t do that either');
    // const hook = new Discord.WebhookClient('346387244392775701','iOvp9gY-xZYIP2NDoJWRNS00Rrl3ho8UfYd9aTJjpOD3vzDCByMIJeyvwRlavL5SMWtH')
    // var request = require('request');
    // request('https://www.hydrogenmods.co.uk/Authentication/HydroStats/GetUninjects.php', function (error, response, body) {
    //     hook.send(`The total number of uninjects is ${body}`)
    //     console.log(`Uninjection amount is: ${body}`)
    // })
}
module.exports.help = {
    name: "uninjects"
}

module.exports.conf = {
    aliases: ['unin']
}