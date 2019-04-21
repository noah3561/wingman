const { Command } = require("discord-akairo")

class Invite extends Command {
    constructor() {
        super("invite", {
            aliases: ["invite"],
            ownerOnly: true
        })
    }

    exec(message) {
        message.channel.send("https://discordapp.com/oauth2/authorize?client_id=561237791581929493&scope=bot&permissions=8")
    }
}

module.exports = Invite