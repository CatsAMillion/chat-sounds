const start = () => {
  const client = new tmi.Client({
    connection: { reconnect: true },
    channels: [ 'catsamillion' ],
  });

  client.connect();

  const chatSounds = {
    'jeff': new Audio('../sounds/jeff.mp3'),
    'hellodarkness': new Audio('../sounds/hello_darkness.mp3'),
    'heylisten': new Audio('../sounds/hey_listen.mp3'),
    'plusultra': new Audio('../sounds/plus_ultra.mp3'),
    'sad': new Audio('../sounds/sad.mp3'),
    'wow': new Audio('../sounds/wow.mp3'),
    'womp': new Audio('../sounds/womp.mp3'),
    'smash': new Audio('../sounds/smash.mp3'),
    'meow': new Audio('../sounds/meow.mp3'),
    'airhorn': new Audio('../sounds/air-horn.mp3'),
    'applause': new Audio('../sounds/applause.mp3'),
    'pikachu': new Audio('../sounds/pikachu.mp3'),
    'oof': new Audio('../sounds/oof.mp3'),
    'mariodeath': new Audio('../sounds/mario_death.mp3'),
    'nani': new Audio('../sounds/nani.mp3'),
    'happybirthday': new Audio('../sounds/happy_birthday.mp3'),
  };

  client.on('message', (channel, tags, message, self) => {
    const officialCommand = '!sound';
    const [command, name] = message.split(' ');
    if (command !== officialCommand || !chatSounds.hasOwnProperty(name.toLowerCase())) return;
    chatSounds[name].currentTime = 0;
    chatSounds[name].play();
  });
}

document.querySelector('button').addEventListener('click', () => start());