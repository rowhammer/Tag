module.exports.run = async(Tag, msg, args) => {
    var resetRoles = [msg.guild.roles.find(staff => staff.name === "Staff"), msg.guild.roles.find(tester => tester.name === "Tester"), msg.guild.roles.find(lu => lu.name === "Lifetime Users"), msg.guild.roles.find(mu => mu.name === "Monthly Users"), msg.guild.roles.find(sm => sm.name === "Site Members")];
    
    // var userRoles = msg.guild.rolesOf(args[0]);
    if (msg.member.id === "391736039879999489") {
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

module.exports.conf = {
    aliases : ['rr']
}