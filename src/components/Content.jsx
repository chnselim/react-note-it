import React from 'react';
import PropTypes from 'prop-types';

export default function Content(props) {
  const { note } = props;

  return (
    <div className='scrollY'>
      <h4>{note.title}</h4>
      <p>{note.content}</p>
    </div>
  );
}

Content.propTypes = {
  note: PropTypes.object,
};
