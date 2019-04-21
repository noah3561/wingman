const { Command } = require("discord-akairo")
const figlet = require("figlet")

class Asciify extends Command {
    constructor() {
        super("asciify", {
            aliases: ["asciify", "ascii"],
            args: [
                {
                    id: "content",
                    match: "content"
                }
            ]
        })
    }

    exec(message, args) {
        figlet(`${args.content}`, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            message.channel.send(`\`\`\`${data}\`\`\``)
        });
    }
}

module.exports = Asciify