const { Command } = require("discord-akairo")
const { osuAPIKey } = require("../../Tokens.js")
const osu = require("node-osu")
const { MessageEmbed } = require("discord.js")
const osuApi = new osu.Api(osuAPIKey)

class OsuUser extends Command {
    constructor() {
        super("osuuser", {
            aliases: ["osuuser", "osu-user"],
            args: [
                {
                    id: "user",
                    type: "rest"
                }
            ]
        })
    }

    exec(message, args) {
        if (!args.user) return message.channel.send("Incorrect usage. The correct usage is \`-osuuser <user>\`")
        osuApi.getUser({u: `${args.user}`}).then(user => {
            const embed = new MessageEmbed()
            .setTitle(user.name)
            .setColor(this.client.customColors.magenta)
            .setThumbnail("https://s.ppy.sh/images/head-logo.png")
            .addField("Username", user.name, true)
            .addField("Play Count:", user.counts.plays, true)
            .addField("Level", user.level, true)
            .addField("Global Rank", user.pp.rank, true)
            .addField("Country", user.country, true)
            .addField("Country Rank", user.pp.countryRank, true)
            .addField("SS+ Maps", user.counts.SSH, true)
            .addField("SS Maps", user.counts.SS, true)
            .addField("S+ Maps", user.counts.SH, true)
            .addField("S Maps", user.counts.S, true)
            .addField("A Maps", user.counts.A, true)

            message.channel.send(embed)
        })
    }
}

module.exports = OsuUser