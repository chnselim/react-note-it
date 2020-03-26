import React from 'react';
import { useSelector } from 'react-redux';
import NotePreview from '../components/NotePreview';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const state = useSelector(state => state.note);

  return (
    <section>

      <Sidebar
        notes={state.notes}
        selectedNote={state.selectedNote}
      />

      <NotePreview
        selectedNote={state.selectedNote}
      />

    </section>
  );
}
