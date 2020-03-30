import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

export default function Sidebar(props) {
  const dispatch = useDispatch();
  const { notes, selectedNote } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [hasNewNote, setHasNewNote] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (notes.length > 0) {
      dispatch({ type: 'SELECT', note: notes[0] });
      setTimeout(() => document.getElementById('activeInputTitle').focus());
    } else {
      dispatch({ type: 'SELECT', note: null });
    }
    setHasNewNote(false);
  }, [hasNewNote]);

  function createNewNote() {
    dispatch({ type: 'ADD' });
    setHasNewNote(true);
  }

  function changeSelectedNote(note) {
    dispatch({ type: 'SELECT', note: note });
  }

  function deleteNote(note) {
    dispatch({ type: 'DELETE', note: note });
    if (selectedNote.id === note.id) {
      setHasNewNote(true);
    }
  }

  return (
    <div className={`sidebar${collapsed ? ' collapsed' : ''}`}>

      <div className='header'>
        <input
          className='form-control form-control-sm'
          placeholder='Search'
          onKeyUp={(e) => setSearchText(e.target.value)}
        />
        <button
          className='btn btn-sm note-option create-button'
          onClick={createNewNote}
        >
          <span className='lnr lnr-cross' />
        </button>
        {/* <button */}
        {/*  className='btn btn-sm note-option collapse-button' */}
        {/*  onClick={() => setCollapsed(!collapsed)} */}
        {/* > */}
        {/*  <span className={`lnr lnr-arrow-${collapsed ? 'right' : 'left'}`} /> */}
        {/* </button> */}
      </div>

      <div className='scrollY min-43'>
        {
          notes
            .filter(note => note.title.toLowerCase().includes(searchText.toLowerCase()))
            .map(note => {
              return (
                <NoteItem
                  key={note.id}
                  item={note}
                  isActive={note.id === selectedNote?.id}
                  handleOnNoteClick={() => changeSelectedNote(note)}
                  handleOnNoteDelete={() => deleteNote(note)}
                />
              );
            })
        }
      </div>

    </div>
  );
}

Sidebar.propTypes = {
  notes: PropTypes.array,
  selectedNote: PropTypes.object,
};
