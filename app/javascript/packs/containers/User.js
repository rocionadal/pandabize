import React, { Component } from 'react';
import bikePic from '../../../assets/images/bike.jpg';

import ColorSelector from '../components/ColorSelector/ColorSelector';

import SizeSelector from '../components/SizeSelector/SizeSelector';

class User extends Component {
    state = {
      bicycle: {
        model: 'BMC - RoadMachine TWO - Di2 2021',
        photo: 'images/bike.jpg',
        price: 200,
        buildingOptions: [{
          wheelSize: 17,
          rimColor: ['red'],
          saddleColor: ['white', 'purple', 'blue']
        }, {
          wheelSize: 18,
          rimColor: ['red', 'green'],
          saddleColor: ['white', 'purple', 'blue']
        }, {
          wheelSize: 19,
          rimColor: ['red', 'green', 'black'],
          saddleColor: ['white', 'purple', 'blue']
        }]
      }
    }

    componentDidMount() {
      /// FETCH THE BICYCLE
      /* fetch('api/bicyle', response => {
        this.setState({...response})
      })*/
    }

    render() {
      const { bicycle } = this.state;
      return (
        <React.Fragment>
            <h1 style={{textAlign: 'center', marginBottom: 0}}>{bicycle.model}</h1>
            <img src={bikePic} style={{width: '75%'}}/>
            <SizeSelector/>
            <ColorSelector/>
            <ColorSelector/>
        </React.Fragment>
      );
    }
  }
  
  export default User;