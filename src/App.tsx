import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

import './styles/theme.css';
import './styles/global.css';

import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

export function App() {
  //Todos os componentes que usam número saibam das mudanças em seu valor.
  //Sempre que eu usar o Hook useState, não vou usar atribuição diretamente
  // const [numero, setNumero] = useState(() => {
  //   console.log('lazy initialization');

  //   return 0;
  // }); //hook

  const [numero, setNumero] = useState();

  function handleClick(){
    setNumero(1);

    // setNumero(prevState => prevState + 1);

    // const span = document.getElementById('numero');
    // if(!span) return;
    // numero +=1;
    // span.innerText = numero.toString();
    // console.log(numero, Date.now());
  }

  return (
    <>
      <Heading>
        Número: <span id='numero'>{numero}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              title='TITULO'
              placeholder='Digite Algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
