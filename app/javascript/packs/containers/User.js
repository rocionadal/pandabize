import React, { Component } from 'react';
import bikePic from '../../../assets/images/bike.jpg';

import ColorSelector from '../components/ColorSelector/ColorSelector';
import SizeSelector from '../components/SizeSelector/SizeSelector';
import Button from '../components/UI/Button/Button';
import classes from './User.module.scss';
import { Selected } from '../components/UI/SelectorButton/SelectorButton.module.scss';

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
      },
      wheelSizeSelected: ''
    }

    componentDidMount() {
      /// FETCH THE BICYCLE
      /* fetch('api/bicyle', response => {
        this.setState({...response})
      })*/
    }

    clickHandler = event => {
      this.setState(prevState => {
        return {...prevState, wheelSizeSelected: event.target.innerText }
      })
      const selected = document.querySelector(`.${Selected}`);
      const classList = event.target.classList;
      if (!classList.contains(Selected) && !selected) {
          classList.add(Selected);
      } else if (!classList.contains(Selected) && selected) {
          selected.classList.remove(Selected)
          classList.add(Selected)
      } else if (!classList.contains(Selected)){
          classList.add(Selected)
      } else {
          classList.remove(Selected);
      }
    }

    render() {
      const { bicycle } = this.state;
      const { wheelSizeSelected } = this.state;

      const wheelSizeOptions = bicycle.buildingOptions.map(option => {
        return option.wheelSize;
      })

      // const rimColorOptions = bicycle.buildingOptions.map(option => {
      //  return option.rimColor;
      // })

      return (
        <React.Fragment>
            <h1 style={{textAlign: 'center', marginBottom: 0}}>{bicycle.model}</h1>
            <div className={classes.BikeContainer}>
              <img src={bikePic} style={{width: '75%'}}/>
              <div className={classes.Selector}>
                <SizeSelector title={'Wheel size'} options={wheelSizeOptions} clickHandler={this.clickHandler} selected={wheelSizeSelected}/>
                <ColorSelector title={'Rim'} />
                <ColorSelector title={'Saddle'} />
                <Button text={'Continue'}/>
              </div>
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default User;