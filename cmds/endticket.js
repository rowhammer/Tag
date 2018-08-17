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
        let logchan = msg.guild.channels.find('name', 'bot_log');
        let supportchan = msg.guild.channels.find('name', 'support');
        let supportusr = msg.mentions.members.first() || msg.guild.members.get(args.slice(1).join(` `));
        let ticket = msg.guild.roles.find(r => r.name === "ticket");
        if (!ticket) return msg.member.send('Couldn\'t find role');
        if (!supportusr.roles.has(ticket.id)) return msg.member.send('This user doesn\'t have this role');

        msg.delete();
        await supportusr.removeRole(ticket);
        // msg.author.send(`Success! Support ticket has been closed with user: ${supportusr.user.username}.`);
        supportusr.send(`Thank you for using the support process. Your ticket has now been closed.`);
        supportchan.send(`**Ticket closed by ${msg.author.username} for ${supportusr.user.username}**`);
        logchan.send(`**Support ticket role removed from ${supportusr.user.username} in the ${msg.guild.name} server by ${msg.author.username}**`);
        console.log(`Support ticket role removed from ${supportusr.user.username} in the ${msg.guild.name} server by ${msg.author.username}`);
    } else return msg.member.send('nah fam, you need the support role')
}

module.exports.help = {
    name: 'endticket'
}