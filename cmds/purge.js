module.exports.run = async(Tag, msg, args) => {

    let Discord = require("discord.js");
    if (msg.member.hasPermission("MANAGE_MESSAGES")) {
        const user = msg.mentions.users.first();
        let messageCount = !!parseInt(msg.content.split(' ')[1]) ? parseInt(msg.content.split(' ')[1]) : parseInt(msg.content.split(' ')[2])
        if (!messageCount) return msg.channel.send('Specify an amount');
        if (!messageCount && !user) return msg.channel.send('Specify a user to purge or an amount')
        if (messageCount > 99) msg.channel.send(`Nah that's too much`)
        else {
            msg.channel.fetchMessages({
                limit: messageCount
            }).then(messages => {
                if (user) {
                    const filterBy = user ? user.id : Tag.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, messageCount);
                }
                msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
            })
            msg.channel.send(`${msg.author.username} removed ${messageCount} messages`).then(message => message.delete(3000));
            console.log(`Removed ${messageCount} messages by ${msg.author.username}`)
            messageCount = 0;
        }
    } else return msg.channel.send('Nah')
}

module.exports.help = {
    name: "purge"
}