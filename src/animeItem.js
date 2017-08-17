import React from 'react';
import styled from 'styled-components';

const transition = 'all 0.2s cubic-bezier(0.0, 0.0, 0.2, 1);';
const AnimeItem = styled.div`
	will-change: auto;
	background-color: #fff;
	padding: 1.25em 1.5em;
	margin-bottom: 1px;
	opacity: 0;
	transform: translateY(100%);
	transition: ${transition};

	.text {
		opacity: 0;
		transform: translateY(100%);
		display: inline-block;
		transition: ${transition};
	}

    &:nth-child(${props => props.item}) {
      .loaded & {  
		opacity: 1;
		transform: translateY(0);
        transition-delay: ${props => props.delay.bg}ms;
		

        .text {
            transform: translateY(0);
			opacity: 1;
          	transition-delay: ${props => props.delay.fg}ms;
        }
      } 
    }
`;

export default AnimeItem;