const { AkairoClient, ListenerHandler, CommandHandler } = require("discord-akairo");
const path = require("path");
const { token } = require("./Tokens.js")
class Client extends AkairoClient {
	constructor() {
		super({
			ownerID: ["187771864435785728", "281232421347786762", "217006264570347520"]
		},
		{
			disableEveryone: true
		});
	
	this.commandHandler = new CommandHandler(this, {
		directory: path.join(__dirname, "Commands"),
		prefix: "="
    });
    
    this.listenerHandler = new ListenerHandler(this, {
        directory: path.join(__dirname, "Listeners")
    })
    this.listenerHandler.setEmitters({
        commandHandler: this.commandHandler
    })
    
  this.listenerHandler.loadAll();
	this.commandHandler.useListenerHandler(this.listenerHandler);
	this.commandHandler.loadAll();
	this.customColors = {
		"red": 0xFF0000,
		"dark_red": 0xCC0000,
		"maroon": 0x990000,
		"green": 0x00FF00,
		"yellow": 0xFFFF00,
		"blue": 0x0000FF,
		"orange": 0xFFA500,
		"purple": 0x800080,
		"teal": 0x00FFFF,
		"dark_green": 0x006600,
		"black": 0x000001,
		"white": 0xFFFFFF,
		"blank": 0x36393E,
		"magenta": 0xcc2e8a
	};
	
	this.playingS = [
		{
			title: "with Noah", type: "PLAYING"
		}, {
			title: "Spotify!", type: "LISTENING"
		}, {
			title: "the database!", type: "WATCHING"
		}, {
			title: "your movements!", type: "WATCHING"
		}, {
			title: "paint dry.", type: "WATCHING"
		}
	];
}
	
	convertTime(t) {
        const ms = parseInt((t) % 1000);
        const absoluteSeconds = parseInt((t / (1000)) % 60);
        const absoluteMinutes = parseInt((t / (1000 * 60)) % 60);
        const absoluteHours = parseInt((t / (1000 * 60 * 60)) % 24);
        const absoluteDays = parseInt((t / (1000 * 60 * 60 * 24)));

        const d = absoluteDays > 0 ? absoluteDays === 1 ? "1 day" : `${absoluteDays} days` : null;
        const h = absoluteHours > 0 ? absoluteHours === 1 ? "1 hour" : `${absoluteHours} hours` : null;
        const m = absoluteMinutes > 0 ? absoluteMinutes === 1 ? "1 minute" : `${absoluteMinutes} minutes` : null;
        const s = absoluteSeconds > 0 ? absoluteSeconds === 1 ? "1 second" : `${absoluteSeconds} seconds` : null;

        const absoluteTime = [];
        if (d) absoluteTime.push(d);
        if (h) absoluteTime.push(h);
        if (m) absoluteTime.push(m);
        if (s) absoluteTime.push(s);

        return absoluteTime.join(", ");
    }
	
	cFL(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
    }
}

setInterval(() => {
	const cS = client.playingS[Math.floor(Math.random() * client.playingS.length)];
  
	client.user.setActivity(cS.title, {
	  type: cS.type
	});
  }, 60000);
  
  

const client = new Client();
client.login(token);