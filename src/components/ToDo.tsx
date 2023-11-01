import { IToDo } from './atoms';

function ToDo({ text }: IToDo) {
  return (
    <ul>
      <li>{text}</li>
    </ul>
  );
}

export default ToDo;
