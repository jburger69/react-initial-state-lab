import React from 'react';

// your Bomb code here!
export default class Bomb extends React.Component {

    constructor () {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }


    render() {
      return (
          <h1>I am on slide {this.state.currentSlideIndex}</h1>
      )
    }

}