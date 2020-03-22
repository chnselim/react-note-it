import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

export default function Sidebar(props) {
  const dispatch = useDispatch();
  const { notes, selectedNote } = props;
  const [searchText, setSearchText] = useState('');

  function createNewNote() {
    dispatch({ type: 'ADD' });
    dispatch({ type: 'SELECT', note: notes[0] }); // todo wtf ?
  }

  function changeSelectedNote(note) {
    dispatch({ type: 'SELECT', note: note });
  }

  return (
    <div className='sidebar'>

      <div className='header'>
        <input
          className='form-control form-control-sm'
          placeholder='Search'
          onKeyUp={(e) => setSearchText(e.target.value)}
        />
      </div>

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
              />
            );
          })
      }

      <div className='footer'>
        <button
          className='btn btn-sm w-100'
          onClick={createNewNote}
        >Create New Note
        </button>
      </div>

    </div>
  );
}

Sidebar.propTypes = {
  notes: PropTypes.array,
  selectedNote: PropTypes.object,
};
