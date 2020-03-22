import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function NotePreview(props) {
  const dispatch = useDispatch();
  const { note } = props;

  function editNoteTitle(e) {
    dispatch({
      type: 'EDIT',
      note: {
        ...note,
        title: e.target.value,
      },
    });
    dispatch({ type: 'SELECT', note: note });
  }

  function editNoteContent(e) {
    dispatch({
      type: 'EDIT',
      note: {
        ...note,
        content: e.target.value,
      },
    });
    dispatch({ type: 'SELECT', note: note });
  }

  return (
    <div className='preview'>
      {
        note
          ? (
            <div className='w-100'>
              <input
                className='preview-input'
                type='text'
                value={note.title}
                onChange={editNoteTitle}
              />
              <textarea
                value={note.content}
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
  note: PropTypes.object,
};
