const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")
const pi = require("package-info")

class Module extends Command {
    constructor() {
        super("module", {
            aliases: ["module"],
            args: [
                {
                    id: "module",
                    match: "content"
                }
            ]
        })
    }

    async exec(message, args) {
        const info = await pi(args.module)
        const embed = new MessageEmbed()
        .setTitle(`Info for ${args.module}`)
        .setThumbnail("https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/188/thumb/npmlogo.png")
        .setColor(this.client.customColors.red)
        .addField("Module Name", info.name, true)
        .addField("Module Author", info.author, true)
        .addField("Module Version", info.version, true)
        .addField("Module Description", info.description, true)
        .addField("Module Homepage", info.homepage, true)
        message.channel.send(embed)
    }
}

module.exports = Module