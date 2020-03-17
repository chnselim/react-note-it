import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function Note(props) {
  const { item, isActive, handleOnNoteClick } = props;

  return (
    <div
      className={`note ${isActive ? 'active' : ''}`}
      onClick={() => handleOnNoteClick(item)}
    >
      <span>{moment(item.createdAt).format('DD MMM YYYY - HH:mm:ss')}</span>
      <h5>{item.title}</h5>
    </div>
  );
}

Note.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  handleOnNoteClick: PropTypes.func,
};
