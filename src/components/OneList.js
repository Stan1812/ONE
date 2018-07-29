import React from 'react';
import PropTypes from 'prop-types';

const OneList = ({content }) => {
  return(
    <div> this is one</div>
  )
};

OneList.propTypes = {
  content: PropTypes.array.isRequired
};

export default OneList;