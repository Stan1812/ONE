import React from 'react';
import PropTypes from 'prop-types';

const OneList = (content ) => {
  return(

    <div> {content.title}</div>
  )
};

OneList.propTypes = {
  content: PropTypes.object
};

export default OneList;