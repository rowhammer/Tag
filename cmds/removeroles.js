module.exports.run = async(Tag, msg, args) => {
    var resetRoles = [msg.guild.roles.find("name", "Staff"), msg.guild.roles.find("name", "Tester"), msg.guild.roles.find("name", "Lifetime Users"), msg.guild.roles.find("name", "Monthly Users"), msg.guild.roles.find("name", "Site Members")]
    
    // var userRoles = msg.guild.rolesOf(args[0]);
    if (msg.member.id === "194396300194742272") {
        console.log(resetRoles.toString())
        Tag.removeRole(args[0], resetRoles.length, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log(`Removed role ${role.name} from user ${user.name}`)
            }
        })
    }
}



module.exports.help = {
    name: "removeroles"
}