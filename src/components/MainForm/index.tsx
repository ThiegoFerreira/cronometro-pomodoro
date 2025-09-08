import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {

  // function handleClick(){
  //   setState(prevState =>{
  //     return {
  //       ...prevState,
  //       config: {
  //         ...prevState.config,
  //         workTime: 34,
  //       },
  //       formattedSecondsRemaining:'23:34'
  //     }
  //   })
  // }
  return (
    <form className='form' action=''>

      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='meuInput'
          type='text'
          title='TITULO'
          placeholder='Digite Algo'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25 min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
