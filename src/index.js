import React, { Component } from 'react';
import { render } from 'react-dom';
import cx from 'classnames';
import styled, {injectGlobal} from 'styled-components';

import Item from './Item';
import data from './banks.json';

injectGlobal`
  body {
    margin: 0;
	font-size: 16px;
	font-family: 'arial', sans-serif;
    background-color: #eceef1;
  }
`;

const Wrapper = styled.div`
	max-width: 500px;
	width: 100%;
	margin: 3em auto;
	overflow: hidden;
`;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      banks: [],
      loaded: ''
    };
  }
  
  componentDidMount() {
  	this.setState({ 
      banks: data,
    });
    setTimeout(this.show, 500)
  }
  
  show = () => {
    this.setState({loaded: 'loaded'})
  }
  
  render() {
    return (
      <Wrapper className={cx(this.state.loaded)}>
          {
              this.state.banks.map( (bank, index) => {
                return (
                  <Item 
                    item={index} 
                    key={index}
                  >
                      {bank.data}
                  </Item>
                  )
              })
          }
      </Wrapper>
    )
  }
};

render(<App />, document.getElementById('root'));
