import React from 'react';
import PropTypes from 'prop-types';

export default function NotePreview(props) {
  const { note } = props;

  return (
    <div className='content'>
      {
        note
          ? (
            <div>
              <h4>{note.title}</h4>
              <p className='scrollY'>{note.content}</p>
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
