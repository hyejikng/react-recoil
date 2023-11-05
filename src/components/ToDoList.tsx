import { useRecoilValue } from 'recoil';
import { toDoSelector, toDoState } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function Todolist() {
  /* const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  const SelectorOut = useRecoilValue(toDoSelector);
  console.log(SelectorOut); */
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>TO DO LIST</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((item) => (
          <ToDo key={item.id} {...item} /> // {...item} => interface IToDo
        ))}
      </ul>
      <hr />

      <h2>Doing</h2>
      <ul>
        {doing.map((item) => (
          <ToDo key={item.id} {...item} /> // {...item} => interface IToDo
        ))}
      </ul>
      <hr />

      <h2>Done</h2>
      <ul>
        {done.map((item) => (
          <ToDo key={item.id} {...item} /> // {...item} => interface IToDo
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
