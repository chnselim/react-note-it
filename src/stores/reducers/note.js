import { v4 as uuidv4 } from 'uuid';
import Storage from '../../services/storage';

const initialNotes = Storage.getItem('notes') || [
  {
    id: '1',
    title: 'Golang',
    content: 'Go piler GopherJS[22] compiles Go to JavaScript for front-end web development.',
    updatedAt: Date.now(),
    createdAt: Date.now(),
  },
  {
    id: '2',
    title: 'Javascript',
    content: 'JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.\n' +
      '\n' +
      'Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[8] JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior,[9] and all major web browsers have a dedicated JavaScript engine to execute it.\n' +
      '\n' +
      'As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). However, the language itself does not include any input/output (I/O), such as networking, storage, or graphics facilities, as the host environment (usually a web browser) provides those APIs.\n' +
      '\n' +
      'Originally used only in web browsers, JavaScript engines are now embedded in server-side website deployments, often via Node.js. They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.',
    updatedAt: Date.now() + 100,
    createdAt: Date.now() + 100,
  },
];

const initialState = {
  notes: initialNotes,
  selectedNote: initialNotes[0],
};

export default function note(state = initialState, action) {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        notes: [
          {
            id: uuidv4(),
            title: '',
            content: '',
            createdAt: Date.now(),
            updatedAt: Date.now(),
          },
          ...state.notes,
        ],
      };
    }
    case 'EDIT': {
      state.notes[state.notes.findIndex(note => note.id === action.note.id)] = action.note;
      return {
        ...state,
        notes: [
          ...state.notes,
        ],
      };
    }
    case 'DELETE': {
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.note.id),
      };
    }
    case 'SELECT': {
      return {
        ...state,
        selectedNote: state.notes.find(note => note.id === action.note?.id),
      };
    }
    default:
      return state;
  }
}
