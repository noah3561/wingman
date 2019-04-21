const { Command } = require("discord-akairo")
const yt = require("youtube-info")
const { MessageEmbed } = require("discord.js")
const ytSearch = require("yt-search")

class YTVideo extends Command {
    constructor() {
        super("ytvideo", {
            aliases: ["ytvideo", "videoinfo"],
            args: [
                {
                    id: "video",
                    match: "content"
                }
            ]
        })
    }

    exec (message, args) {
        if (!args.video) return message.channel.send("Please include a video for me to look up!")
        ytSearch( args.video , function ( err, r ) {
            if (err) throw err;
            yt(r.videos[0].videoId).then(function (videoInfo) {
            const embed = new MessageEmbed()
            .setTitle(`Video Info for ${videoInfo.title}`)
            .setThumbnail(videoInfo.thumbnailUrl)
            .setColor(0xFF0000)
            .addField("Video URL", videoInfo.url, true)
            .addField("Video Genre", videoInfo.genre, true)
            .addField("Video Owner", videoInfo.owner, true)
            .addField("Date Published", videoInfo.datePublished, true)
            .addField("Like Count", videoInfo.likeCount, true)
            .addField("Dislike Count", videoInfo.dislikeCount, true)
            .addField("Comment Count", videoInfo.commentCount, true)
            message.channel.send(embed)
            } )
          });
    }
}

module.exports = YTVideo