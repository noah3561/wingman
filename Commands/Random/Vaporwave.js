const { Command } = require("discord-akairo")

class Vaporwave extends Command {
    constructor() {
        super("vaporwave", {
            aliases: ["vaporwave"],
            args: [
                {
                    id: "content",
                    match: "content"
                }
            ]
        })
    }

    exec(message, args) {
        if (!args.content) return message.channel.send("Please include some text!")
        const vaporwavefied = args.content.split("").map(char => {
            const code = char.charCodeAt(0)
            return code >= 33 && code <= 126 ? String.fromCharCode((code - 33) + 65281) : char
          }).join('')
      message.channel.send(vaporwavefied)
    }
}

module.exports = Vaporwave