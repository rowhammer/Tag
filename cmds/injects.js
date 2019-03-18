module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === '391736039879999489') {
        const Discord = require('discord.js') 
        // msg.channel.send('Can\'t do that right now');
        const hook = new Discord.WebhookClient('452044666351910931', 'hlcJ1ONCx5KiY6Dr53v_owSf9rnD1hOocJGsypwGMSpyEVYdA2yzhZzbb7SrF24mO5lB')
        var request = require('request');
        request('https://www.hydrogenmods.co.uk/Authentication/HydroStats/GetInjects.php', function (error, response, body) {
            hook.send(`Total Injection amount is **${body}**`)
            // hook.send(`The total number of injects is ${body}`)
            console.log(`Injection amount is: ${body}`)
        })
    } else return msg.channel.send('Can\'t do that right now');
}


module.exports.help = {
    name: "injects"
}

module.exports.conf = {
    aliases : ['in']
}