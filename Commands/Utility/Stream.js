const { Command } = require("discord-akairo")
const TwitchHelix = require("twitch-helix")
const { twitchSecret, twitchClientID } = require("../../Tokens.js")
const twitch = new TwitchHelix({
    clientId: twitchClientID,
    clientSecret: twitchSecret
});
const { MessageEmbed } = require("discord.js")
const request = require("node-superfetch")
const moment = require("moment-timezone")

class Stream extends Command {
    constructor() {
        super("stream", {
            aliases: ["stream", "streaminfo"],
            args: [
                {
                    id: "user",
                    type: "rest"
                }
            ]
        })
    }

    exec(message, args){
        if (!args.user) {
            return message.channel.send("Incorrect usage. The correct usage is \`-stream <user>\`")
        }
        twitch.getStreamInfoByUsername(args.user).then(twitchUser => {
            if (twitchUser == null) {
                return message.channel.send("Error. That user either does not exist or is currently offline. Please check your request and try again.")
            } else {
                const gameID = twitchUser.game_id
                const data = request.get(`https://api.twitch.tv/helix/games?id=${gameID}`)
                .set("Client-ID", twitchClientID)
                .then((data) => {
                    const iURL = `https://static-cdn.jtvnw.net/previews-ttv/live_user_${args.user}-200x200.jpg`
                    const embed = new MessageEmbed()
                    .setAuthor(twitchUser.user_name)
                    .setThumbnail(iURL)
                    .setColor(this.client.customColors.blank)
                    .addField("Stream Title:", twitchUser.title, true)
                    .addField("Game:", data.body.data[0].name, true)
                    .addField("Viewer Count:", twitchUser.viewer_count.toLocaleString(), true)
                    .addField("Stream Started At:", moment(twitchUser.started_at).tz("America/Chicago").format("dddd, MMMM Do, YYYY [at] h:mm A zz"), true)
                    .addField("Language:", twitchUser.language, true)
                    message.channel.send(embed)
                })

                // const embed = new MessageEmbed()
                // .setAuthor(twitchUser.user_name)
                // .setColor(this.client.customColors.blank)
                // .setThumbnail(twitchUser.profile_image_url)
                // .addField("User:", twitchUser.user_name, true)
                // .addField("Broadcaster Type:", twitchUser.broadcaster_type, true)
                // .addField("View Count:", twitchUser.view_count, true)
                // message.channel.send(embed)
            }
        })    
    }
}

module.exports = Stream