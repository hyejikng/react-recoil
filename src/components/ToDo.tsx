import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from './atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
  };
  return (
    <ul>
      <li>
        <span>{text}</span>
        {category !== 'DOING' && (
          <button name="DOING" onClick={onClick}>
            Doing
          </button>
        )}
        {/* 카테고리가 doing이 아닐때에만 Doing 버튼을 보여줄 것이다.  */}
        {category !== 'TO_DO' && (
          <button name="TO_DO" onClick={onClick}>
            To Do
          </button>
        )}
        {category !== 'DONE' && (
          <button name="DONE" onClick={onClick}>
            Done
          </button>
        )}
      </li>
    </ul>
  );
}

export default ToDo;
