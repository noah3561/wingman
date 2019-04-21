const { Command } = require("discord-akairo")

class Countdown extends Command {
    constructor() {
        super("countdown", {
            aliases: ["countdown"],
            args: [
                {
                    id: "choice",
                    type: "lowercase"
                }
            ]
        })
    }

    exec(message, args) {
        if (!args.choice) {
            message.channel.send("Please include one of the following: \`noah\`, \`sarah\`, \`discord\`, \`more coming\`")
        } else if (args.choice == "noah") {
            var date1 = new Date('November 22, 2019 00:00:00');
            var date2 = new Date;
            var dTime = date1-date2
            message.channel.send(this.client.convertTime(dTime))
        } else if (args.choice == "sarah") {
            var date1 = new Date('June 19, 2019 00:00:00');
            var date2 = new Date;
            var dTime = date1-date2
            message.channel.send(this.client.convertTime(dTime))
        } else if (args.choice == "discord") {
            var date1 = new Date('May 13, 2019 00:00:00');
            var date2 = new Date;
            var dTime = date1-date2
            message.channel.send(this.client.convertTime(dTime))
        } else if (args.choice == "more coming") {
            message.channel.send("Send Noah a DM if you want your BDay added or some other important day.")
        }
    }
}

module.exports = Countdown