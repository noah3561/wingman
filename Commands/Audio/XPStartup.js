const { Command } = require("discord-akairo")

class XPStartup extends Command {
    constructor() {
        super("xpstartup", {
            aliases: ["xpstartup"]
        })
    }

    exec(message) {
        if (!message.member.voice.channel) {
            return message.channel.send("You're not in a voice channel!")
        } else {
            var VC = message.member.voice.channel;
            VC.join()
            .then(connection => {
                const dispatcher = connection.play("./Assets/Sounds/XP_Startup.mp3")
                dispatcher.on("finish", () => {VC.leave()})
            })
            .catch(console.error)
        }
    }
}

module.exports = XPStartup