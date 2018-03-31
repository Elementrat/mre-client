const stateSequence = [
  'PREGAME',
  'SIGNING_IN',
  'ANNOUNCEMENT',
  'PHASE1',
  'MYSTERYEVENT',
  'PHASE2',
  'ACCUSATIONS',
  'REVEALS',
  'POSTGAME',
];

const mocks = () => {
  const mockEventData = {
    events: {
      bigOne: {
        mysteryName: 'Trouble In Koopa Castle',
        startDateTime: 'April 1',
        hostUserName: 'Steve',
        hostCharacterID: 'a',
        currentPhase: 'PREGAME',
        phases: stateSequence,
      },
    },
  };

  const mockMysteryData = {
    characters: [
      {
        name: 'Toad',
        _id: 'a',
        required: true,
        summary: 'A green goober who is always up to something weird',
        backstory: 'Toad grew up on the farm. It was a hard life. Mario came along one day and brought him into the world',
        currency: 100,
        knowledge: [
          {
            name: 'Mario has a dark secret',
            _id: 'yos0',
          },
          {
            name: 'Peach has been sending cakes to Luigi',
            _id: 'yos1',
          },
        ],
        items: [
          { name: 'tiara', _id: 'toaditem1', count: 1 },
          { name: 'baseball bat', _id: 'toaditem2', count: 1 },
        ],

        objectives: [
          {
            name: 'destroy bowser emotionally',
            description: 'it will be ez',
            complete: false,
            _id: 'toadobj1',
          },
          {
            name: 'pull mario\'s stache',
            description: 'find 1 coins',
            complete: false,
            _id: 'toadobj2',
          },
          {
            name: '1up boi',
            description: 'convince toad to tell you his secret',
            complete: false,
            _id: 'toadobje',
          },
        ],
      },
      {
        name: 'Yoshi',
        _id: 'b',
        required: true,
        currency: 100,
        backstory: 'Yoshi has always been seen as a vehicle for the people in his life, and hes sick of it!',
        summary: 'Marios long time trusted ally, but looking to break into the limelight. ',
        knowledge: [
          {
            name: 'Mario has a dark secret',
            _id: 'yos0',
          },
          {
            name: 'Peach has been sending cakes to Luigi',
            _id: 'yos1',
          },
        ],
        items: [
          { name: 'tiara', _id: 'yositem1', count: 1 },
          { name: 'baseball bat', _id: 'yositem2', count: 1 },
        ],

        objectives: [
          {
            name: 'destroy bowser emotionally',
            description: 'it will be ez',
            complete: false,
            _id: 'yosobj1',
          },
          {
            name: 'pull mario\'s stache',
            description: 'find 1 coins',
            complete: false,
            _id: 'yosobj2',
          },
          {
            name: '1up boi',
            description: 'convince toad to tell you his secret',
            complete: false,
            _id: 'yosobj3',
          },
        ],
      },
      {
        name: 'Peach',
        _id: 'c',
        required: true,
        currency: 100,
        backstory: 'A life of luxury quickly bored the precocious princess, and she now spends her time trying to mess with everyone',
        summary: 'Everyone\'s favorite princess.',
        knowledge: [
          {
            name: 'Bowser has been meaning to tell you something',
            _id: 'pea0',
          },
          {
            name: 'Luigi stole Marios cap',
            _id: 'pea1',
          },
        ],
        items: [
          { name: 'tiara', _id: 'peachitem1', count: 1 },
          { name: 'baseball bat', _id: 'peachitem2', count: 1 },
        ],

        objectives: [
          {
            name: 'destroy bowser emotionally',
            description: 'it will be ez',
            complete: false,
            _id: 'yosobj1',
          },
          {
            name: 'pull mario\'s stache',
            description: 'find 1 coins',
            complete: false,
            _id: 'yosobj2',
          },
          {
            name: '1up boi',
            description: 'convince toad to tell you his secret',
            complete: false,
            _id: 'yosobj3',
          },
        ],
      },
      {
        name: 'Mario',
        _id: 'd',
        required: true,
        currency: 100,
        backstory: 'The most famous resident of Koopa Kingdom. At the same time, insecure about Luigis growing influence',
        summary: 'Everyone\'s favorite plumber.',
        knowledge: [
          {
            name: 'Luigi is actually a ghost',
            _id: 'pea0',
          },
          {
            name: 'Bowser is secretly an incredible chef, but doesn\'t want anyone to know',
            _id: 'pea1',
          },
        ],
        items: [
          { name: 'goomba pelt', _id: 'yositem1', count: 1 },
          { name: 'yoshi tongue', _id: 'yositem2', count: 1 },
        ],

        objectives: [
          {
            name: 'smash dat mf like button',
            description: 'figure out who smashed',
            complete: false,
            _id: 'marobj1',
          },
          {
            name: 'get stario',
            description: 'find 1 coins',
            complete: false,
            _id: 'marobj2',
          },
          {
            name: '1up boi',
            description: 'convince toad to tell you his secret',
            complete: false,
            _id: 'marobj3',
          },
        ],
      },
      {
        name: 'Bowser',
        _id: 'e',
        required: true,
        currency: 100,
        backstory: 'Bowser feels he has received the short end of the stick, on many counts.',
        summary: 'Evil nor no? Nobody is sure.',
        knowledge: [
          {
            name: 'Luigi is actually a ghost',
            _id: 'pea0',
          },
          {
            name: 'Bowser is secretly an incredible chef, but doesn\'t want anyone to know',
            _id: 'pea1',
          },
        ],
        items: [
          { name: 'goomba pelt', _id: 'bowitem1', count: 1 },
          { name: 'yoshi tongue', _id: 'bowitem2', count: 1 },
        ],

        objectives: [
          {
            name: 'smash dat mf like button',
            description: 'figure out who smashed',
            complete: false,
            _id: 'bowobj1',
          },
          {
            name: 'get stario',
            description: 'find 1 coins',
            complete: false,
            _id: 'bowobj2',
          },
          {
            name: '1up boi',
            description: 'convince toad to tell you his secret',
            complete: false,
            _id: 'bowobj3',
          },
        ],
      },
      {
        name: 'Koopa Kid',
        _id: 'f',
        required: true,
        currency: 100,
        backstory: 'A total enigma',
        summary: 'Everyone\'s favorite plumber.',
        knowledge: [
          {
            name: 'Luigi is actually a ghost',
            _id: 'pea0',
          },
          {
            name: 'Bowser is secretly an incredible chef, but doesn\'t want anyone to know',
            _id: 'pea1',
          },
        ],
        items: [
          { name: 'goomba pelt', _id: 'a', count: 1 },
          { name: 'yoshi tongue', _id: 'b', count: 1 },
        ],

        objectives: [
          {
            name: 'smash dat mf like button',
            description: 'figure out who smashed',
            complete: false,
            _id: 'kooobj1',
          },
          {
            name: 'get stario',
            description: 'find 1 coins',
            complete: false,
            _id: 'kooobj2',
          },
          {
            name: '1up boi',
            description: 'convince toad to tell you his secret',
            complete: false,
            _id: 'kooobj3',
          },
        ],
      },
      {
        name: 'King Boo',
        _id: 'g',
        required: true,
        currency: 100,
        backstory: 'King Boo is a scary guy',
        summary: 'Everyone\'s favorite plumber.',
        knowledge: [
          {
            name: 'Luigi is actually a ghost',
            _id: 'pea0',
          },
          {
            name: 'Bowser is secretly an incredible chef, but doesn\'t want anyone to know',
            _id: 'pea1',
          },
        ],
        items: [
          { name: 'goomba pelt', count: 1, _id: 'kingitem1', },
          { name: 'yoshi tongue', count: 1, _id: 'kingitem2', },
        ],

        objectives: [
          {
            name: 'smash dat mf like button',
            description: 'figure out who smashed',
            complete: false,
            _id: 'kinbj1',
          },
          {
            name: 'get stario',
            description: 'find 1 coins',
            complete: false,
            _id: 'kinobj2',
          },
          {
            name: '1up boi',
            description: 'convince toad to tell you his secret',
            complete: false,
            _id: 'kinobj3',
          },
        ],
      },
    ],
  };

  const mysteryTroubleInKoopaCastle = {
    name: 'Trouble In Koopa Castle',
    summary: 'Its Mario and Peaches wedding day. But Bowser is up to something...',
    currencyName: 'dollars',
    characters: mockMysteryData.characters,
    minPlayers: 4,
    maxPlayers: 9,
  };

  const eventTroubleInKoopaCastle = mockEventData.events.bigOne;

  return {
    getSampleMystery: () => mysteryTroubleInKoopaCastle,
    getSampleEvent: () => eventTroubleInKoopaCastle,
  };
};

export { mocks };
