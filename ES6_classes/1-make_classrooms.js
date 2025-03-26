import ClassRoom from './0-classroom';

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
      task = true;
      task2 = false;
  }

  return [task, task2];
}