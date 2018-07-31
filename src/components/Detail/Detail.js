import React from 'react';
import PropTypes from "prop-types"
const Detail = (content)=>{
  return(
    <div dangerouslySetInnerHTML={{__html:content.hp_content}}></div>
  )
}
Detail.propTypes = {
  content: PropTypes.object
};

export default Detail;
