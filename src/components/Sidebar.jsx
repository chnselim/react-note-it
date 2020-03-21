import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

export default function Sidebar(props) {
  const { notes, selectedNote, handleOnNoteClick } = props;
  const [searchText, setSearchText] = useState('');

  return (
    <div className='list'>

      <div className='header-area'>
        <input
          className='form-control form-control-sm'
          placeholder='Search by title'
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
                handleOnNoteClick={() => handleOnNoteClick(note)}
              />
            );
          })
      }

      <div className='footer-area'>
        <button className='btn btn-sm w-100'>Create New Note</button>
      </div>

    </div>
  );
}

Sidebar.propTypes = {
  notes: PropTypes.array,
  selectedNote: PropTypes.object,
  handleOnNoteClick: PropTypes.func,
};
