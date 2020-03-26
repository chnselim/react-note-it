import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function NoteItem(props) {
  const { item, isActive, handleOnNoteClick, handleOnNoteDelete } = props;

  return (
    <div
      className={`note${isActive ? ' active' : ''}`}
      onClick={() => handleOnNoteClick(item)}
    >
      <span>{moment(item.createdAt).format('DD MMM - HH:mm:ss')}</span>
      <h5 className='mb-0'>{item.title || 'No Title'}</h5>

      <span
        className='lnr lnr-cross remove-button'
        onClick={(e) => {
          e.stopPropagation(); handleOnNoteDelete(item);
        }}
      />

    </div>
  );
}

NoteItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  handleOnNoteClick: PropTypes.func,
  handleOnNoteDelete: PropTypes.func,
};
