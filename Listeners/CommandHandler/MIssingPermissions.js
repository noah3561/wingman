const { Listener } = require('discord-akairo');

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class CommandHandlerMissingPermissions extends Listener {
  constructor() {
    super('commandHandlerMissingPermissions', {
      emitter: 'commandHandler',
      event: 'missingPermissions'
    });
  }

  exec(message, c, t, mi) {
    if (t == 'user') {
      return message.channel.send(`You do not have valid permissions to run this command. You need the ${
        mi.map(p => '**' + p.toLowerCase().replace(/_/g, ' ').split(' ').map(pe => capFirstLetter(pe)).join(' ') + '**').join(', ').replace(/, ([^,]*)$/, ' and $1')
      } permission${mi.length == 1 ? '' : 's'}.`);
    } else {
      return message.channel.send(`I do not have the required permissions to run this command. I need ${
        mi.map(p => '**' + p.toLowerCase().replace(/_/g, ' ').split(' ').map(pe => capFirstLetter(pe)).join(' ') + '**').join(', ').replace(/, ([^,]*)$/, ' and $1')
      } permission${mi.length == 1 ? '' : 's'}.`);
    }
  }
}

module.exports = CommandHandlerMissingPermissions;