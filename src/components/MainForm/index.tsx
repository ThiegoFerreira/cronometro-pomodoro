import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";


export function MainForm() {
  const {setState} = useTaskContext();
  function handleClick(){
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining:'21:00'
      };
    });
  }

  return (
    <form className='form' action=''>
      <button onClick={handleClick} type="button">clicar</button>
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
