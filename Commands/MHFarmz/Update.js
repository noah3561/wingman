const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class FarmzUpdate extends Command {
    constructor() {
        super("farmzupdate", {
            aliases: ["update"],
            args: [
                {
                    id: "update",
                    match: "content"
                }
            ]
        })
    }

    exec(message, args) {
        if (!args.update) return message.reply("please include something to announce!")
        const embed = new MessageEmbed()
        .setTitle("Server Update!")
        .setThumbnail(message.guild.iconURL())
        .setDescription(args.update)
        .setColor(this.client.customColors.teal)

        message.guild.channels.get("551645127756611652").send(embed)
    }
}

module.exports = FarmzUpdate