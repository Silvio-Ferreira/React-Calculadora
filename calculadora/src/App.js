import Input from './Components/Input';
import Button from './Components/Button';
import { Container, Content, Row, Column } from './styles'
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0')
  };
  
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
                <Button label="9" onClick={() => handleAddNumber('9')}/>
                <Button label="÷" onClick={() => handleAddNumber('')}/>
                <Button label="C" onClick={handleOnClear}/>
                <Button label="X" onClick={() => handleAddNumber('')}/>
            </Row>
        <Row>
                <Button label="6" onClick={() => handleAddNumber('6')}/>
                <Button label="7" onClick={() => handleAddNumber('7')}/>
                <Button label="8" onClick={() => handleAddNumber('8')}/>
                <Button label="-" onClick={() => handleAddNumber('-')}/>
          </Row>
            <Row>
                <Button label="3" onClick={() => handleAddNumber('3')}/>
                <Button label="4" onClick={() => handleAddNumber('4')}/>
                <Button label="5" onClick={() => handleAddNumber('5')}/>
                <Button label="+" onClick={() => handleAddNumber('')}/>
            </Row>
            <Row>
                <Button label="0" onClick={() => handleAddNumber('0')}/>
                <Button label="1" onClick={() => handleAddNumber('1')}/>
                <Button label="2" onClick={() => handleAddNumber('2')}/>
                <Button label="=" onClick={() => handleAddNumber('=')}/>
            </Row>
      </Content>
    </Container>
  );
}

export default App;
