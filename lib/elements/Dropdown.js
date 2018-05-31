import styled from 'styled-components';
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

export default class Dropdown extends Component {

  constructor(props){
    super(props)
    this.state = {
      expanded: false,
      primary: this.props.primary,
      listItem: this.props.itemcontent,
    }
  }

  toggleList = () => {
    this.setState({
      expanded: !true;
    })
  };

  render() {
    const { primary, itemcontent } = this.props

    return (
      <div className="wrapper">

        // Primary Label
        <div onClick={() => this.toggleList()}>
          <div>{this.props.primary}</div>
        </div>

        // List Items
        <div>
          {expanded &&
            <ul className="list">
              {list.map((item) => (
                <li className="item">{item.itemcontent}</li>
              ))}
            </ul>
          }
        </div>
      </div>
    )
  }
}

const Dropdown = styled.dropdown`
  background: #1FB6FF;
  border: none;
  border-radius: 2px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: #009EEB;
  }
`;
