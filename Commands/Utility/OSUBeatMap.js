const { Command } = require("discord-akairo")
const { osuAPIKey } = require("../../Tokens.js")
const osu = require("node-osu")
const { MessageEmbed } = require("discord.js")
const osuApi = new osu.Api(osuAPIKey)

class OsuBeatMap extends Command {
    constructor() {
        super("osubeatmap", {
            aliases: ["osubeatmap", "osumap", "osu-map"],
            args: [
                {
                    id: "user",
                    type: "rest"
                }
            ]
        })
    }

    exec(message, args) {
        if (!args.user) return message.channel.send("Incorrect usage. The correct usage is \`-osumap <Map ID>\`")
        osuApi.getBeatmaps({b: args.user}).then(beatmaps => {
            const embed = new MessageEmbed()
            .setTitle(beatmaps[0].title)
            .setColor(this.client.customColors.magenta)
            .setThumbnail("https://s.ppy.sh/images/head-logo.png")
            .addField("Map Name", beatmaps[0].title, true)
            .addField("Map Creator", beatmaps[0].creator, true)
            .addField("Artist", beatmaps[0].artist, true)
            .addField("Version", beatmaps[0].version, true)
            .addField("Beats Per Minute", beatmaps[0].bpm, true)
            .addField("Genre", beatmaps[0].genre, true)
            .addField("Language", beatmaps[0].language, true)
            .addField("Mode", beatmaps[0].mode, true)

            message.channel.send(embed)
        });
    }
}

module.exports = OsuBeatMap