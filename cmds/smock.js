module.exports.run = async(Tag, msg, args) => {
    if (msg.member.id === "391736039879999489") {
        const alternateCase = (string) => {
            const chars = string.toUpperCase().split('');
            for (let i = 0; i < chars.length; i += 2) {
                chars[i] = chars[i].toLowerCase();
            }
            return chars.join('');
        };
        try {
            const grabMock = await msg.channel.fetchMessages({
                limit: 1,
                before: msg.id
            });
            const mock = grabMock.first();
            if (mock.author == Tag.user) return msg.reply(`|'❌'| You cannot mock ${Tag.user.username}.`);
            msg.delete();
            await msg.channel.send(alternateCase(mock.cleanContent), {
                files: [{
                    attachment: './res/spongebob.png',
                    name: 'mock.png'
                }]
            });
        } catch (error) {
            throw error;
        }
    }
}
module.exports.help = {
    name: 'mock'
};