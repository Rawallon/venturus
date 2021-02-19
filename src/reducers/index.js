import { combineReducers } from 'redux';

const initialState = {
  myTeams: [
    {
      formation: '4-2-3-1',
      players: [
        { pos: 1, id: '77', name: 'Ronaldo da Silva Souza' },
        { pos: 2, id: '122', name: 'Claudio Ronaldo Nunez Aquino' },
        { pos: 3, id: '1805', name: 'Julian Ronald Armand Lelieveld' },
        { pos: 4, id: '3986', name: 'Ronaldo Rodrigues Tavares' },
        { pos: 5, id: '4268', name: 'Edwin Ronaldo Ariza Cabezas' },
        { pos: 6, id: '4705', name: 'Ronald Jonathan Quinteros Sanchez' },
        { pos: 7, id: '9950', name: 'Ronaldo Baez Mendoza' },
        { pos: 8, id: '7946', name: 'Ronaldo Tavera' },
        { pos: 9, id: '17978', name: 'Roberto Ronaldo Cespedes Sanchez' },
        { pos: 10, id: '16938', name: 'Ronald Brian Ddungu Mukiibi' },
        { pos: 11, id: '18006', name: 'Ronald Erick Champang Zambrano' },
      ],
      tag: [' barcelona', ' atk', 'def', ' europeu'],
      teamdata: {
        id: '1613668803847',
        name: 'Barcelona',
        wsite: 'http://www.barcelona.com/',
        ttype: 'fantasy',
        desc: 'Barcelona Squad',
      },
      avgAge: 31.9,
    },
    {
      formation: '4-2-3-1',
      players: [
        { pos: 1, id: '1223', name: 'Ronaldo Octavian Andrei Deaconu' },
        { pos: 2, id: '3986', name: 'Ronaldo Rodrigues Tavares' },
        { pos: 3, id: '4705', name: 'Ronald Jonathan Quinteros Sanchez' },
        { pos: 4, id: '10705', name: 'Jorge Ronaldo Tello Barre' },
        { pos: 5, id: '7889', name: 'Ronaldo Cisneros Morell' },
        { pos: 6, id: '17978', name: 'Roberto Ronaldo Cespedes Sanchez' },
        { pos: 7, id: '22544', name: 'Ronald Federico Araujo da Silva' },
        { pos: 8, id: '26299', name: 'Ronald Gomez' },
        { pos: 9, id: '63579', name: 'Ronald Illes' },
        { pos: 10, id: '47359', name: 'Ronald Wolf' },
        { pos: 11, id: '70461', name: 'Ronald Conn' },
      ],
      tag: [' barcelona', ' atk', 'def', ' europeu'],
      teamdata: {
        id: '1613771970860',
        name: 'Real Madrid',
        wsite: 'http://www.RealMadrid.com/',
        ttype: 'real',
        desc: 'Real Madrid Squad',
      },
      avgAge: 31.7,
    },
    {
      formation: '4-2-3-1',
      players: [
        { pos: 1, id: '1223', name: 'Ronaldo Octavian Andrei Deaconu' },
        { pos: 2, id: '77', name: 'Ronaldo da Silva Souza' },
        { pos: 3, id: '4061', name: 'Ronaldo Ivan Johnson Mina' },
        { pos: 4, id: '10705', name: 'Jorge Ronaldo Tello Barre' },
        { pos: 5, id: '7946', name: 'Ronaldo Tavera' },
        { pos: 6, id: '5288', name: 'Ronald Alberto Matarrita Ulate' },
        { pos: 7, id: '17978', name: 'Roberto Ronaldo Cespedes Sanchez' },
        { pos: 8, id: '13598', name: 'Ronald Alejandro Vargas Aranguren' },
        { pos: 9, id: '12479', name: 'Martin Ronald Kelly' },
        { pos: 10, id: '17975', name: 'Ronaldo Paolo Andia Uculmana' },
        { pos: 11, id: '33370', name: 'Ronaldo Pah Paul' },
      ],
      tag: [' Millan', ' atk', 'def', ' europeu'],
      teamdata: {
        id: '1613668793432',
        name: 'Millan',
        wsite: 'http://www.Millan.com/',
        ttype: 'real',
        desc: 'Millan Squad',
      },
      avgAge: 31.6,
    },
    {
      formation: '4-2-3-1',
      players: [
        { pos: 1, id: '77', name: 'Ronaldo da Silva Souza' },
        { pos: 2, id: '1805', name: 'Julian Ronald Armand Lelieveld' },
        { pos: 3, id: '4079', name: 'Ronny Ronaldo Rueda Rodriguez' },
        { pos: 4, id: '4705', name: 'Ronald Jonathan Quinteros Sanchez' },
        { pos: 5, id: '10705', name: 'Jorge Ronaldo Tello Barre' },
        { pos: 6, id: '18006', name: 'Ronald Erick Champang Zambrano' },
        { pos: 7, id: '12869', name: 'Ronald Pierre Ruiz Ordinola' },
        { pos: 8, id: '26203', name: 'Ronaldo Flowers' },
        { pos: 9, id: '21534', name: 'Ronaldo David Rivas Vielma' },
        { pos: 10, id: '58876', name: 'Ronald Madibi Mufanzwaini' },
        { pos: 11, id: '45304', name: 'Ronald Vlot' },
      ],
      tag: [' Liverpool', ' atk', 'def', ' europeu'],
      teamdata: {
        id: '1613772013868',
        name: 'Liverpool',
        wsite: 'http://www.Liverpool.com/',
        ttype: 'real',
        desc: 'Liverpool Squad',
      },
      avgAge: 27.8,
    },
    {
      formation: '4-2-3-1',
      players: [
        { pos: 1, id: '77', name: 'Ronaldo da Silva Souza' },
        { pos: 2, id: '1805', name: 'Julian Ronald Armand Lelieveld' },
        { pos: 3, id: '4705', name: 'Ronald Jonathan Quinteros Sanchez' },
        { pos: 4, id: '9950', name: 'Ronaldo Baez Mendoza' },
        { pos: 5, id: '7134', name: 'Gino Ronald Van Kessel' },
        { pos: 6, id: '17978', name: 'Roberto Ronaldo Cespedes Sanchez' },
        { pos: 7, id: '13598', name: 'Ronald Alejandro Vargas Aranguren' },
        { pos: 8, id: '33370', name: 'Ronaldo Pah Paul' },
        { pos: 9, id: '24656', name: 'Ronald Ketjijere' },
        { pos: 10, id: '58876', name: 'Ronald Madibi Mufanzwaini' },
        { pos: 11, id: '45304', name: 'Ronald Vlot' },
      ],
      tag: ['Bayern', 'Munich', ' atk', 'def', ' europeu'],
      teamdata: {
        id: '1613772042728',
        name: 'Bayern Munich',
        wsite: 'http://www.BayernMunich.com/',
        ttype: 'real',
        desc: 'Bayern Munich Squad',
      },
      avgAge: 33.5,
    },
    {
      formation: '4-2-3-1',
      players: [
        { pos: 1, id: '4061', name: 'Ronaldo Ivan Johnson Mina' },
        { pos: 2, id: '4705', name: 'Ronald Jonathan Quinteros Sanchez' },
        { pos: 3, id: '9950', name: 'Ronaldo Baez Mendoza' },
        { pos: 4, id: '5549', name: 'Ronaldo Camara' },
        { pos: 5, id: '4887', name: 'Ronaldo de Jesus Prieto Ramirez' },
        { pos: 6, id: '18006', name: 'Ronald Erick Champang Zambrano' },
        { pos: 7, id: '16938', name: 'Ronald Brian Ddungu Mukiibi' },
        { pos: 8, id: '12869', name: 'Ronald Pierre Ruiz Ordinola' },
        { pos: 9, id: '26203', name: 'Ronaldo Flowers' },
        { pos: 10, id: '24656', name: 'Ronald Ketjijere' },
        { pos: 11, id: '20540', name: 'Ronaldo Vidal Lucena Torrealba' },
      ],
      tag: [' Lazio', ' atk', 'def', ' europeu'],
      teamdata: {
        id: '1613772075539',
        name: 'Lazio',
        wsite: 'http://www.Lazio.com/',
        ttype: 'real',
        desc: 'Lazio Squad',
      },
      avgAge: 28.3,
    },
    {
      formation: '4-2-3-1',
      players: [
        { pos: 1, id: '4061', name: 'Ronaldo Ivan Johnson Mina' },
        { pos: 2, id: '4705', name: 'Ronald Jonathan Quinteros Sanchez' },
        { pos: 3, id: '1223', name: 'Ronaldo Octavian Andrei Deaconu' },
        { pos: 4, id: '8942', name: 'Cristiano Ronaldo Dos Santos Aveiro' },
        { pos: 5, id: '5549', name: 'Ronaldo Camara' },
        { pos: 6, id: '4887', name: 'Ronaldo de Jesus Prieto Ramirez' },
        { pos: 7, id: '17978', name: 'Roberto Ronaldo Cespedes Sanchez' },
        { pos: 8, id: '16640', name: 'Ronald Jose Hernandez Pimentel' },
        { pos: 9, id: '12576', name: 'Ronald de la Fuente Arias' },
        { pos: 10, id: '26203', name: 'Ronaldo Flowers' },
        { pos: 11, id: '21587', name: 'Ronaldo Tiismaa' },
      ],
      tag: [' barcelona', ' atk', 'def', ' brasileiro'],
      teamdata: {
        id: '1613668793432',
        name: 'Palmeiras',
        wsite: 'http://www.palmeiras.com.br/',
        ttype: 'fantasy',
        desc: 'Sociedade Esportiva Palmeiras!!',
      },
      avgAge: 30.6,
    },
    {
      formation: '4-2-3-1',
      players: [
        { pos: 1, id: '3986', name: 'Ronaldo Rodrigues Tavares' },
        { pos: 2, id: '122', name: 'Claudio Ronaldo Nunez Aquino' },
        { pos: 3, id: '8942', name: 'Cristiano Ronaldo Dos Santos Aveiro' },
        { pos: 4, id: '5288', name: 'Ronald Alberto Matarrita Ulate' },
        { pos: 5, id: '4887', name: 'Ronaldo de Jesus Prieto Ramirez' },
        { pos: 6, id: '17978', name: 'Roberto Ronaldo Cespedes Sanchez' },
        { pos: 7, id: '16938', name: 'Ronald Brian Ddungu Mukiibi' },
        { pos: 8, id: '12576', name: 'Ronald de la Fuente Arias' },
        { pos: 9, id: '26299', name: 'Ronald Gomez' },
        { pos: 10, id: '24656', name: 'Ronald Ketjijere' },
        { pos: 11, id: '20540', name: 'Ronaldo Vidal Lucena Torrealba' },
      ],
      tag: ['Juventus', ' atk', 'def', ' europeu'],
      teamdata: {
        id: '1613668793432',
        name: 'Juventus Torino',
        wsite: 'http://www.JuventusTorino.com/',
        ttype: 'real',
        desc: 'Juventus Squad',
      },
      avgAge: 27.2,
    },
  ],
  selectedTeam: {},
};

const myTeamsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TEAM':
      return { ...state, myTeams: [...state.myTeams, payload] };
    case 'SET_TEAM':
      return {
        ...state,
        myTeams: [
          ...state.myTeams.filter(
            (el) => el.teamdata.id !== payload.teamdata.id,
          ),
          payload,
        ],
      };
    case 'GET_TEAMS':
      return state;
    case 'GET_TEAM':
      return {
        ...state,
        selectedTeam: state.myTeams.filter((el) => el.teamdata.id === payload),
      };
    case 'DELETE_TEAM':
      return {
        ...state,
        myTeams: state.myTeams.filter((el) => el.teamdata.id !== payload),
      };
    default:
      return state;
  }
};

export default combineReducers({
  teams: myTeamsReducer,
});
