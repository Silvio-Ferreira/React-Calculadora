import Input from './Components/Input';
import Button from './Components/Button';
import { Container, Content, Row, Column } from './styles'
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    
  };
  
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  // const handleSumNumbers = () => {
  //   if(firstNumber === '0'){
  //     setFirstNumber(String(currentNumber));
  //     setCurrentNumber('0');
  //     setOperation('+');
  //   } else {
  //     const sum = Number(firstNumber) + Number(currentNumber);
  //     setCurrentNumber(String(sum));
  //     setOperation('');
  //   }
  // }

  const handleSumNumbers = () => {
    if (operation === '+') {
      const sum = Number(firstNumber) + Number(currentNumber);
      setFirstNumber(String(sum));
      setCurrentNumber('0');
    } else if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }
  };
  

  // const handleEquals = () => {
  //   if(firstNumber !== '' && operation !== '' && currentNumber !== ''){
  //     switch(operation){
  //       case '+':
  //       handleSumNumbers();
  //       break;
  //       case '-':
  //         handleMinusNumbers();
  //       break;
  //     }
  //   };
  // }

  const handleEquals = () => {
    if (firstNumber !== '' && operation !== '' && currentNumber !== '') {
      let result = 0;
      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        default:
          return;
          case '÷':
          result = Number(firstNumber) / Number(currentNumber);
          break;
          case 'X':
          result = Number(firstNumber) * Number(currentNumber);
          break;
      }
      setCurrentNumber(String(result));
      setFirstNumber('0'); // Resetamos o primeiro número
      setOperation('');
    }
  };
  

  // const handleMinusNumbers = () => {
  //   if(firstNumber === '0'){
  //     setFirstNumber(String(currentNumber));
  //     setCurrentNumber('0');
  //     setOperation('-');
  //   } else {
  //     const rem = Number(firstNumber) - Number(currentNumber);
  //     setCurrentNumber(String(rem));
  //     setOperation('');
  //   }
  // }

  const handleMinusNumbers = () => {
    if (operation === '-') {
      const rem = Number(firstNumber) - Number(currentNumber);
      setFirstNumber(String(rem));
      setCurrentNumber('0');
    } else if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }
  };

  const handleDivNumbers = () => {
    if (operation === '÷') {
      const div = Number(firstNumber) / Number(currentNumber);
      setFirstNumber(String(div));
      setCurrentNumber('0');
    } else if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('÷');
    }
  };
  const handleMultNumbers = () => {
    if (operation === 'X') {
      const mult = Number(firstNumber) * Number(currentNumber);
      setFirstNumber(String(mult));
      setCurrentNumber('0');
    } else if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('X');
    }
  };
  
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
                <Button label="9" onClick={() => handleAddNumber('9')}/>
                <Button label="C" onClick={handleOnClear}/>
                <Button label="÷" onClick={handleDivNumbers}/>
                <Button label="X" onClick={handleMultNumbers}/>
            </Row>
        <Row>
                <Button label="6" onClick={() => handleAddNumber('6')}/>
                <Button label="7" onClick={() => handleAddNumber('7')}/>
                <Button label="8" onClick={() => handleAddNumber('8')}/>
                <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
            <Row>
                <Button label="3" onClick={() => handleAddNumber('3')}/>
                <Button label="4" onClick={() => handleAddNumber('4')}/>
                <Button label="5" onClick={() => handleAddNumber('5')}/>
                <Button label="+" onClick={handleSumNumbers}/>
            </Row>
            <Row>
                <Button label="0" onClick={() => handleAddNumber('0')}/>
                <Button label="1" onClick={() => handleAddNumber('1')}/>
                <Button label="2" onClick={() => handleAddNumber('2')}/>
                <Button label="=" onClick={handleEquals}/>
            </Row>
      </Content>
    </Container>
  );
}

export default App;
