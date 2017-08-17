import React from 'react';
import PropTypes from 'prop-types';	
import styled from 'styled-components';

import AnimeItem from './animeItem';

const propTypes = {
  item: PropTypes.number.isRequired,
};

const Item = (props) => {
  
  const nbrItem = props.item + 1
  
  // Define our `fg` and `bg` on the theme
  const delay = {
	bg: 500 + (42 * props.item),
	fg: 540 + (42 * props.item)
  };
  
  return (
    <AnimeItem item={nbrItem} delay={delay}>
      <span className="text">
        {props.children}
      </span>
    </AnimeItem>
  )
};

Item.propTypes = propTypes;
export default Item;
