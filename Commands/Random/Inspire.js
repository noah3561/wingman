const { Command } = require("discord-akairo")
const request = require("request")
const { MessageEmbed } = require("discord.js")

class Inspire extends Command {
    constructor() {
        super("inspire", {
            aliases: ["inspire"]
        })
    }

    exec(message) {
        var options = { method: 'GET',
            url: 'https://inspirobot.me/api?generate=true&oy=vey',
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body)
            const embed = new MessageEmbed()
            .setImage(body)
            .setColor(0x36393E)
            message.channel.send(embed)
        });
    }
}

module.exports = Inspire