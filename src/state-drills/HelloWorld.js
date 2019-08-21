import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = {
      who:'World'
    }
  }

  render() {
    return (
      <div>
        <p>The Hello world drill</p>
        <p>Hello {this.state.who}</p>
        <button
        onClick={() => this.setState({ who: 'world' })}
        >World</button>
        <button
        onClick={() => this.setState({ who: 'friend' })}>Friend</button>
        <button
        onClick={() => this.setState({ who: 'react' })}>React</button>

      </div>
    )
  }
}

export default HelloWorld