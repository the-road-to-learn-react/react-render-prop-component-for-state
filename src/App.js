import React, { Component } from 'react';

const list = ['a', 'b', 'c'];

class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initialState,
    };
  }

  onUpdateState = value => {
    this.setState({ value });
  };

  render() {
    return this.props.children(this.state.value, this.onUpdateState);
  }
}

const App = () => (
  <State initialState={true}>
    {(toggle, onToggleList) => (
      <div>
        <Toggle
          toggle={toggle}
          onToggleList={() => onToggleList(!toggle)}
        />
        {toggle && <List list={list} />}
      </div>
    )}
  </State>
);

const Toggle = ({ toggle, onToggleList }) => (
  <button type="button" onClick={onToggleList}>
    {toggle ? 'Hide' : 'Show'}
  </button>
);

const List = ({ list }) => (
  <ul>
    {list.map((item, index) => (
      <Item key={index} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => <li>{item}</li>;

export default App;
