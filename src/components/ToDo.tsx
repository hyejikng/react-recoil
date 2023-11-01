import { IToDo } from './atoms';

function ToDo({ text, category }: IToDo) {
  return (
    <ul>
      <li>
        <span>{text}</span>
        {category !== 'DOING' && <button>Doing</button>}
        {/* 카테고리가 doing이 아닐때에만 Doing 버튼을 보여줄 것이다.  */}
        {category !== 'TO_DO' && <button>To Do</button>}
        {category !== 'DONE' && <button>Done</button>}
      </li>
    </ul>
  );
}

export default ToDo;
