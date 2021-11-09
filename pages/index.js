import React, {Component } from 'react';
import factory from '../eth/factory';

class WallieIndex extends Component {
  async componentDidMount(){
    const wallies = await factory.method.allWallets.call();
    console.log(wallies);
  }
  render (){
    return <div> Wallie Index</div>
  }
}
export default WallieIndex
