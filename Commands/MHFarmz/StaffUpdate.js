const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class FarmzStaffUpdate extends Command {
    constructor() {
        super("farmzstaffupdate", {
            aliases: ["supdate"],
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
        .setTitle("Server Staff Update!")
        .setThumbnail(message.guild.iconURL())
        .setDescription(args.update)
        .setColor(this.client.customColors.teal)

        message.guild.channels.get("551645173499822101").send(embed)
    }
}

module.exports = FarmzStaffUpdate