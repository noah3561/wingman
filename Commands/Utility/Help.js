const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class Help extends Command {
    constructor() {
        super("help", {
            aliases: ["help", "commands", "cmds"]
        })
    }

    exec(message) {
        const embed = new MessageEmbed()
        .setTitle("Commands")
        .setColor(this.client.customColors.teal)
        .addField("Audio Commands [**2**]", "\`xpstartup\`, \`xfiles\`")
        .addField("Information Commands [**5**]", "\`botstats\`, \`ping\`, \`serverinfo\`, \`serverstats\`, \`userinfo\`")
        .addField("Random Commands [**6**]", "\`countdown\`, \`asciify\`, \`copypasta\`, \`vaporwave\`, \`module\`, \`movie\`")
        .addField("Utility Commands [**8**]", "\`avatar\`, \`osuuser\`, \`osubeatmap\`, \`stream\`, \`twitch\`, \`uptime\`, \`help\`, \`ytvideo\`")

        message.channel.send(embed)
    }
}

module.exports = Help