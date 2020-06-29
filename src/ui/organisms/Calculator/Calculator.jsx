import React, {useState} from 'react'
import Screen from '../../atoms/Screen/Screen';
import Buttons from '../Buttons/Buttons';

const Calculator = () => {

  const [total, setTotal] = useState('')
  const [currentValue, setCurrentValue] = useState('')

  const handleClick = (e, key) => {
    e.preventDefault();
    const operators = ['+', '-', '*', '/', '.']
    const {value} = e.target
    const newValue = currentValue + value
    setCurrentValue(newValue)
    console.log(newValue, 'This target')
    if(operators.includes(newValue[newValue.length - 1])) {

      if(!operators.includes(currentValue[currentValue.length - 1])) {
        setCurrentValue(currentValue + newValue[newValue.length - 1]);
        let conc = eval(currentValue)
        setCurrentValue(conc + newValue[newValue.length - 1])
      } else {
        setCurrentValue(currentValue)
        console.log('true')
      }
      
     
      console.log(currentValue[currentValue.length - 1], 'Current length Value')
      console.log(newValue[newValue.length - 1], 'This length value')
      // console.log(value)
      console.log(currentValue, 'Current Value')
      console.log(newValue, 'New Value')
        
        
      
    } else if (value == '=') {
      let result = eval(currentValue)
      setCurrentValue(result)
      // console.log(currentValue)
      console.log(result)
    }  else if(value === 'AC') {
      setCurrentValue('')
    } else setCurrentValue(newValue)
  }


  // const compute = (item) =>{
  //   if(item === 'AC') {
  //     setValue('0')
  //   } else if (item === '=') {
  //     let equal = eval(value);
  //     setValue(equal);
  //   } else {
  //     setValue(value + item)
  //   }
  // }

  return (
      <div className="calc-wrapper">
        <div className="screen-wrapper">
          <Screen valueProp={currentValue} clickButton={handleClick}/>
        </div>
        <div className="each-button">
          <Buttons clickButton={handleClick}/>
        </div>
      </div>
  )
}



export default Calculator
