const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class FarmzAnnounce extends Command {
    constructor() {
        super("farmzannounce", {
            aliases: ["announce"],
            args: [
                {
                    id: "news",
                    match: "content"
                }
            ]
        })
    }

    exec(message, args) {
        if (!args.news) return message.reply("please include something to announce!")
        const embed = new MessageEmbed()
        .setTitle("Server Announcement!")
        .setThumbnail(message.guild.iconURL())
        .setDescription(args.news)
        .setColor(this.client.customColors.teal)

        message.guild.channels.get("551645049222463499").send(embed)
    }
}

module.exports = FarmzAnnounce