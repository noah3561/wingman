const { Command } = require("discord-akairo")
const TwitchHelix = require("twitch-helix")
const { twitchSecret, twitchClientID } = require("../../Tokens.js")
const twitch = new TwitchHelix({
    clientId: twitchClientID,
    clientSecret: twitchSecret
});
const { MessageEmbed } = require("discord.js")

class TwitchUser extends Command {
    constructor() {
        super("twitch", {
            aliases: ["twitchuser", "twitch"],
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
            return message.channel.send("Incorrect usage. The correct usage is \`-twitch <user>\`")
        }
        twitch.getTwitchUserByName(args.user).then(twitchUser => {
            if (twitchUser == null) {
                return message.channel.send("Error. Please check your user request and try again.")
            } else {
                const BType = twitchUser.broadcaster_type == "partner" ? "Partner" : twitchUser.broadcaster_type == "affiliate" ? "Affiliate" : "Regular"
                const embed = new MessageEmbed()
                .setAuthor(twitchUser.display_name)
                .setColor(this.client.customColors.blank)
                .setThumbnail(twitchUser.profile_image_url)
                .addField("User:", twitchUser.display_name, true)
                .addField("Broadcaster Type:", BType, true)
                .addField("View Count:", twitchUser.view_count.toLocaleString(), true)
                message.channel.send(embed)
            }
        })    
    }
}

module.exports = TwitchUser