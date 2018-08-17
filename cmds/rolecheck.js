module.exports.run = async(Tag, msg, args) => {
    const discord = require('discord.js')
    function hasRole(member){
        return member.guild.roles.find("name", args[0]) 
    }
}

module.exports.help = {
    name: "rolecheck"
}