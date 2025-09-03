import type { TaskModel } from "./TaskModel";

//Estado -> Componente -> childrens

export type TaskStateModel = {
  tasks: TaskModel[];  //histórico, MainForm
  secondsRemaing: number;  // CountDown, Histórico, MainForm, Button
  formattedSecondsReaming: string;  //Título, CountDown
  activeTask: TaskModel | null;  // CountDown, Histórico MainForm, Button
  currentCycle: number;  // Home
  config: {
    workTime: number;  //mainForm
    shortBreakTime: number;  //mainForm
    longBreakTime: number;  //mainForm
  };
};