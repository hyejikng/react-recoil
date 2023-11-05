import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState, Categories } from './atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    setToDos((prevToDos) => {
      const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = prevToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      const newToDos = [...prevToDos];
      newToDos.splice(targetIndex, 1, newToDo);
      console.log(newToDos);

      return newToDos;
    });
  };
  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((myToDo) => {
      return myToDo.filter(
        (toDo) => toDo.id !== Number(event.currentTarget.id)
      );
    });
  };
  return (
    <ul>
      <li>
        <span>{text}</span>
        {category !== Categories.DOING && (
          <button name={Categories.DOING + ''} onClick={onClick}>
            Doing
          </button>
        )}
        {/* 카테고리가 doing이 아닐때에만 Doing 버튼을 보여줄 것이다.  */}
        {category !== Categories.TO_DO && (
          <button name={Categories.TO_DO + ''} onClick={onClick}>
            To Do
          </button>
        )}
        {category !== Categories.DONE && (
          <button name={Categories.DONE + ''} onClick={onClick}>
            Done
          </button>
        )}
        <button onClick={onDelete}>Delete</button>
      </li>
    </ul>
  );
}

export default ToDo;
