const { Command } = require("discord-akairo")
const { omdbAPI } = require("../../Tokens.js")
const request = require("request")
const { MessageEmbed } = require("discord.js")

class Movie extends Command {
    constructor() {
        super("movie", {
            aliases: ["movie", "moviesearch"],
            args: [
                {
                    id: "movie",
                    match: "content"
                }
            ]
        })
    }

    exec(message, args) {
        var options = { method: 'GET',
            url: 'http://www.omdbapi.com/',
            qs: { apikey: omdbAPI, t: `${args.movie}` },
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            var omdb = JSON.parse(body)
            const embed = new MessageEmbed()
            .setTitle(`${omdb.Title}`)
            .setThumbnail(`${omdb.Poster}`)
            .addField("Year Released", omdb.Year, false)
            .addField("Actors", omdb.Actors, false)
            .addField("Genre(s)", omdb.Genre, false)
            .addField("Plot", omdb.Plot, false)
            .addField("Rating", `${omdb.Metascore}/100`, false)
            .addField("Box Office", omdb.BoxOffice, false)

            message.channel.send(embed)
        });
    }
}

module.exports = Movie;