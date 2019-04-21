const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class Avatar extends Command {
    constructor() {
        super("avatar", {
            aliases: ["avatar"],
            args: [
                {
                    id: "user",
                    type: "user"
                }
            ],
            clientPermissions: ["EMBED_LINKS"]
        })
    }

    exec(message, args) {
        let user = message.mentions.users.first()
        if (user) {
            const embed = new MessageEmbed()
        .setAuthor(user.tag, user.avatarURL({"format": "png"}))
        .setImage(user.avatarURL({"size": 2048}))
        .setColor(this.client.customColors.blank)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        message.channel.send(embed)
        } else if (!user) {
            const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({"format": "png"}))
        .setImage(message.author.avatarURL({"size": 2048}))
        .setColor(this.client.customColors.blank)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        message.channel.send(embed)
        }
    }
}

module.exports = Avatar;