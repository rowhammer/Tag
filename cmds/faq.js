module.exports.run = async (Tag, msg, args) => {
    const Discord = require('discord.js');
    var num = Math.floor(Math.random() * 9000000) + 1000000;
    let faqusr = msg.mentions.members.first();
    var log = 'C:\\Users\\YOURPCNAME\\AppData\\Roaming\\Hydro\\Hydro.log';
    msg.delete();
    const faqsend = new Discord.RichEmbed()
        .setTitle('Frequently Asked Questions')
        .setColor(num)
        .addField('How do get my Lifetime / Monthly roles?', '[Click here to link your account to get the roles](https://www.hydrogenmods.co.uk/account/external-accounts)')
        .addField("Where do I download Hydrogen?", 'From here: [Hydrogen](https://www.hydrogenmods.co.uk/threads/download-hydrogen-4-1.4/)')
        .addField('What if i\'m crashing when I inject?', `- Try Disabling your anti virus\n- Check your Log file here: \n\t**${log}**\n- PM a dev and they'll usually know the issue :)`)
        .addField('I changed PC, where can I reset my HWID?', 'PM a Staff or higher and they\'ll be able to reset your HWID for you')
        .addField('How many PC\'s can I use Hydrogen on?', '2')
        .addField('How do I use the Injector / Loader?', '- Load GTA into single player\n- Run Injector / Loader as admin\n- Login\n- Press Inject\n- Enjoy!')
        .addField('What controls does Hydrogen have?', '- INSERT or F8 to Open Hydrogen\n- Numpad Keys to Navigate\n- Numpad 5 to select\n- Numpad 0 to go back\n- Arrows Key to Navigate\n- Return to select\n- Backspace to go back\n- F5 TP to waypoint\n- F6 TP to objective\n- F11 to Uninject')
        .addField('What Features Does Hydrogen Have Currently?', '[Feature List](https://www.hydrogenmods.co.uk/Features.php)')

    if (!args[0]) {
        try {
            msg.member.send({
                embed: faqsend
            })
            msg.channel.send(`Check your PMs ${msg.author.username}`)
        } catch (e) {
            console.error(e)
        }
    }
    if (args[0])
        try {
            faqusr.send({
                embed: faqsend
            })
            msg.channel.send(`Check your PMs ${faqusr.user.username}`)
            console.log(`FAQs sent to ${faqusr.user.username}`)
        } catch (e) {
            console.error(e)
        }


}

module.exports.help = {
    name: 'faq'
}