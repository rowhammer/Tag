module.exports.run = (Tag, msg, args) => {
    if (msg.member.id === "391736039879999489") {
        const {
            version
        } = require("discord.js");
        const moment = require("moment");
        require("moment-duration-format");

        const duration = moment.duration(Tag.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        msg.channel.send(`= STATISTICS = 
    • Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB    
    • Uptime     :: ${duration}
    • Users      :: ${Tag.users.size.toLocaleString()}
    • Servers    :: ${Tag.guilds.size.toLocaleString()}
    • Channels   :: ${Tag.channels.size.toLocaleString()}
    • Discord.js :: v${version}
    • Node       :: ${process.version}`, {
            code: "asciidoc"
        });
    }
};

module.exports.help = {
    name: "stats"
}

module.exports.conf = {
    aliases: ['tag =']
}