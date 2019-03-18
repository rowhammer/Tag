module.exports.run = async (Tag, msg, args) => {
    function pluck(array) {
        return array.map(function (item) {
            return item["name"];
        });
    }

    function hasRole(member, role) {
        if (pluck(member.roles).includes(role)) {
            return true;
        } else {
            return false;
        }
    }
    if (hasRole(msg.member, 'Support') || msg.member.hasPermission("MANAGE_MESSAGES")) {
        // if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.member.send('This command is in testing phase and you are not able to use it yet');
        let logchan = msg.guild.channels.find('name', 'bot_log');
        let supportchan = msg.guild.channels.find('name', 'support');
        let supportusr = msg.mentions.members.first() || msg.guild.members.get(args.slice(1).join(` `));
        let ticket = msg.guild.roles.find(r => r.name === "ticket");
        if (!ticket) return msg.member.send('Couldn\'t find role');
        if (supportusr.roles.has(ticket.id)) return msg.member.send('This user already has this role');

        msg.delete();
        await supportusr.addRole(ticket);
        msg.author.send(`Success! Support ticket has been opened with user: ${supportusr.user.username}. Please use !endticket [user] to close the ticket`);
        supportusr.send(`You have been given the support ticket role in the ${msg.guild.name} server, please type your query in the #support channel`);
        supportchan.send(`**Ticket created by ${msg.author.username} for <@${supportusr.id}>**`);
        logchan.send(`**Support ticket role given to ${supportusr.user.username} in the ${msg.guild.name} server by ${msg.author.username}**`);
        console.log(`Support ticket role given to ${supportusr.user.username} in the ${msg.guild.name} server by ${msg.author.username}`);
    } else return msg.member.send('nah fam, you need the support role')
}

module.exports.help = {
    name: 'ticket'
}

module.exports.conf = {
    aliases: ['tk']
}
