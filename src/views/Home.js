import React, { useState } from 'react';
import Note from '../components/Note';
import { useSelector } from 'react-redux';

export default function Home() {
  const state = useSelector(state => state.note);
  const [selectedNote, setSelectedNote] = useState(null);

  function getNoteDetail(note) {
    setSelectedNote(note);
    console.log(note);
  }

  function filterNotes(e) {
    console.log(e.target.value);
  }
  return (
    <div className='note-container'>

      <div className='list'>

        <div className='search'>
          <input
            className='form-control form-control-sm' placeholder='Search'
            onKeyUp={filterNotes}
          />
          <button className='btn btn-sm'>New</button>
        </div>

        {
          state.notes.map(note => {
            return (
              <Note
                key={note.id}
                item={note}
                isActive={note.id === selectedNote?.id}
                handleOnNoteClick={(item) => getNoteDetail(item)}
              />
            );
          })
        }
      </div>

      <div className='content'>
        {
          !selectedNote
            ? <h5 className='mt-5 text-center'>No note choosed.</h5>
            : <div><h4>{selectedNote.title}</h4> <p>{selectedNote.content}</p></div>
        }
      </div>

    </div>
  );
}
