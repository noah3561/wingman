const { Command } = require("discord-akairo")

class Uptime extends Command {
    constructor() {
        super("uptime", {
            aliases: ["uptime"]
        })
    }

    exec(message) {
        message.channel.send(`I've been online for ${this.client.convertTime(this.client.uptime)}.`)
    }
}

module.exports = Uptime;