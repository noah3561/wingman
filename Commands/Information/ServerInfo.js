const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class ServerInfo extends Command {
    constructor() {
        super("serverinfo", {
            aliases: ["serverinfo", "server", "si", "guild", "guildinfo", "gi"]
        })
    }

    exec(message) {

        const guildLevel = message.guild.verificationLevel == 0 ? "None" : message.guild.verificationLevel == 1 ? "Low" : message.guild.verificationLevel == 2 ? "Medium" : message.guild.verificationLevel == 3 ? "(╯°□°）╯︵ ┻━┻" : message.guild.verificationLevel == 4 ? "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻" : "Unknown"
        const guildRegion = message.guild.region == "brazil" ? " :flag_br: Brazil" : message.guild.region == "eu-central" ? ":flag_eu: Central Europe" : message.guild.region == "hongkong" ? ":flag_hk: Hong Kong" : message.guild.region == "japan" ? ":flag_jp: Japan" : message.guild.region == "russia" ? ":flag_ru: Russia" : message.guild.region == "singapore" ? ":flag_sg: Singapore" : message.guild.region == "sydney" ? ":flag_au: Sydney" : message.guild.region == "us-central" ? ":flag_us: US Central" : message.guild.region == "us-east" ? ":flag_us: US East" : message.guild.region == "us-west" ? ":flag_us: US West" : message.guild.region == "us-south" ? ":flag_us: US South" : message.guild.region == "eu-west" ? ":flag_eu: Western Europe" : message.guild.region == "southafrica" ? ":flag_za: South Africa" : "Unknown"
        const embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({"format": "png"}))
        .setThumbnail(message.guild.iconURL({"format": "png", "size": 2048}))
        .setColor(this.client.customColors.teal)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        .addField("Guild Info:", `**╠═** Name: **${message.guild.name}**\n**╚═** ID: **${message.guild.id}**`, false)
        .addField("Owner Info:", `**╠═** Tag: **${message.guild.owner.user.tag}**\n**╚═** ID: **${message.guild.owner.id}**`, false)
        .addField("Guild Stats:", `**╠═** Region: **${guildRegion}**\n**╠═** Verification Level: **${guildLevel}**\n**╠═** Roles: **${message.guild.roles.size}**\n**╠═** Channels: **${message.guild.channels.size}**\n**╚═** Members: **${message.guild.memberCount}**`, false)

        message.channel.send({ embed })
    }
}

module.exports = ServerInfo;