const { Listener } = require("discord-akairo");

class CommandStartedListener extends Listener {
    constructor() {
        super("commandStartedListener", {
            emitter: "commandHandler",
            event: "commandStarted"
        });
    };


    async exec(message, command) {
        if (message.guild) console.log(`${message.author.tag} (${message.author.id}) issued guild command =${command} in ${message.guild.name} (${message.guild.id}), #${message.channel.name}`);
        else console.log(`${message.author.tag} (${message.author.id}) issued DM command =${command}`);
    };
};

module.exports = CommandStartedListener;