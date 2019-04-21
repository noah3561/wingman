const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class FarmzSuggest extends Command {
    constructor() {
        super("farmzsuggest", {
            aliases: ["suggest"],
            args: [
                {
                    id: "suggestion",
                    match: "content"
                }
            ]
        })
    }

    exec(message, args) {
        if (!args.suggestion) return message.reply("please include something to suggest!")
        const embed = new MessageEmbed()
        .setTitle("Server Suggestion!")
        .setThumbnail(message.guild.iconURL())
        .setDescription(args.suggestion)
        .setColor(this.client.customColors.teal)

        message.guild.channels.get("551646496768917506").send(embed)
    }
}

module.exports = FarmzSuggest