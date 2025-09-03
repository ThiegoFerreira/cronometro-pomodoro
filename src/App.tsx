import { Home } from './pages/Home';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';

import './styles/theme.css';
import './styles/global.css';



// export type TaskStateModel = {
//   tasks: TaskModel[];  //histórico, MainForm
//   secondsRemaing: number;  // CountDown, Histórico, MainForm, Button
//   formattedSecondsReaming: string;  //Título, CountDown
//   activeTask: TaskModel | null;  // CountDown, Histórico MainForm, Button
//   currentCycle: number;  // Home
//   config: {
//     workTime: number;  //mainForm
//     shortBreakTime: number;  //mainForm
//     longBreakTime: number;  //mainForm
//   };
// };

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaing: 0,
  formattedSecondsReaming: '00:00',
  activeTask: null,
  currentCycle:0,
  config:{
    workTime:25,
    shortBreakTime:5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
