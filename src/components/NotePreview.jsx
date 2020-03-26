import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function NotePreview(props) {
  const dispatch = useDispatch();
  const { selectedNote } = props;

  function editNoteTitle(e) {
    dispatch({
      type: 'EDIT',
      note: {
        ...selectedNote,
        title: e.target.value,
      },
    });
    dispatch({
      type: 'SELECT',
      note: selectedNote,
    });
  }

  function editNoteContent(e) {
    dispatch({
      type: 'EDIT',
      note: {
        ...selectedNote,
        content: e.target.value,
      },
    });
    dispatch({
      type: 'SELECT',
      note: selectedNote,
    });
  }

  return (
    <div className='preview'>
      {
        selectedNote
          ? (
            <div className='w-100'>
              <input
                id='activeInputTitle'
                className='preview-input'
                type='text'
                value={selectedNote.title}
                placeholder='Title Here'
                onChange={editNoteTitle}
              />
              <textarea
                value={selectedNote.content}
                placeholder='Content here'
                onChange={editNoteContent}
              />
            </div>
          )
          : <h5 className='mt-5 text-center'>No note choosed.</h5>
      }
    </div>
  );
}

NotePreview.propTypes = {
  selectedNote: PropTypes.object,
};
