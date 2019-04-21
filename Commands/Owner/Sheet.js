const { Command } = require("discord-akairo");
const fs = require("fs");
const moment = require("moment-timezone");
var data = [];

class Sheet extends Command {
    constructor() {
        super("sheet", {
            aliases: ["sheet", "mapmembers"],
            ownerOnly: true
        })
    }

    async exec(message) {
        message.guild.members.forEach(m => {
            var obj = {
                name: m.user.tag,
                username: m.nickname,
                id: m.user.id,
                joinDate: moment(m.joinedAt).tz("America/Chicago").format("dddd, MMMM Do, YYYY [at] h:mm A zz"),
                creationDate: moment(m.user.createdAt).tz("America/Chicago").format("dddd, MMMM Do, YYYY [at] h:mm A zz"),
                roles: m.roles.array().sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name).join(", ")
            }
            data.push(obj)
        })
        const dataFile =  fs.createWriteStream(`./UserMap/${message.guild.name}-${Date.now()}.json`)

        dataFile.write(JSON.stringify(data, null, 2))
        console.log(`Successfully logged ${message.guild.members.size} members.`)
        message.channel.send(`Successfully logged ${message.guild.members.size} members.`)
    }
}

module.exports = Sheet;