import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NotePreview from '../components/NotePreview';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const state = useSelector(state => state.note);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    setSelectedNote(state.notes[0]);
  }, []);

  function getNoteDetail(note) {
    setSelectedNote(note);
  }

  return (
    <section>

      <Sidebar
        notes={state.notes}
        selectedNote={selectedNote}
        handleOnNoteClick={(item) => getNoteDetail(item)}
      />

      <NotePreview note={selectedNote} />

    </section>
  );
}
