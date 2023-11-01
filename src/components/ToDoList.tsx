import { useRecoilValue } from 'recoil';
import { toDoState } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function Todolist() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>TO DO LIST</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((item) => (
          <ToDo key={item.id} {...item} /> // {...item} => interface IToDo
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
