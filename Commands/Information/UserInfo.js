const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const moment = require("moment-timezone")

class UserInfo extends Command {
    constructor() {
        super("userinfo", {
            aliases: ["userinfo", "user", "ui"]
        })
    }

    // **╚═**
    // **╠═**

    exec(message, args) {
        var member = message.mentions.members.first() || message.member;
        var status = member.user.presence.status == "online" ? "<:OnlineDot:563924904911699984> Online" : member.user.presence.status == "idle" ? "<:IdleDot:563924904857042985> Idle" : member.user.presence.status == "dnd" ? "<:DNDDot:563924904735539201> DND" : "<:OfflineDot:563924904886665226> Offline"
        let activity = member.user.presence.activity ? this.client.cFL(member.user.presence.activity.name) : "None";
        if (member.user.presence.activity.name == "Fortnite" && member.user.presence.activity.details.includes("Battle Royale")) {
            activity = "Fortnite (Battle Royale)"
        }
        if (member.user.presence.activity.name == "Fortnite" && member.user.presence.activity.details.includes("Save The World")) {
            activity = "Fortnite (Save The World)"
        }
        var joinDate = moment(member.joinedAt).tz("America/Chicago").format("dddd, MMMM Do, YYYY [at] h:mm A zz")
        var creationDate = moment(member.user.createdAt).tz("America/Chicago").format("dddd, MMMM Do, YYYY [at] h:mm A zz")
        var roleList = message.guild.members.get(member.id).roles.array().sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role).join(" ");
        var embed = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.avatarURL({"format": "png"}))
        .setThumbnail(member.user.avatarURL({"format": "png", "size": 2048}))
        .setColor(this.client.customColors.teal)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        .addField("Account Info", `**╠═** User Tag: **${member.user.tag}**\n**╠═** User ID: **${member.user.id}**\n**╠═** User Status: **${status}**\n**╠═** User Activity: **${activity}**\n**╠═** Guild Join Date: **${joinDate}**\n**╚═** Account Creation Date: **${creationDate}**`, false)
        .addField(`Roles [**${message.guild.members.get(member.id).roles.size}**]`, roleList, false)

        if (member.user.presence.activity == "Spotify" && member.user.presence.activity.type == "LISTENING" ) {
            embed.addField("Song Info", `**╠═** Song Name: **${member.user.presence.activity.details}**\n**╠═** Song Album: **${member.user.presence.activity.assets.largeText}**\n**╚═** Song Author(s): **${member.user.presence.activity.state}**`)
        }
        message.channel.send(embed)

        
    }
}

module.exports = UserInfo;