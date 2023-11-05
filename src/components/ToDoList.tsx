import { useRecoilSnapshot, useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector, toDoState } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function Todolist() {
  /* const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  const SelectorOut = useRecoilValue(toDoSelector);
  console.log(SelectorOut); */
  // const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const toDos = useRecoilValue(toDoSelector); // array []
  console.log(toDos);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    // console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value as any);
  };
  console.log(category);
  return (
    <div>
      <h1>TO DO LIST</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="To_Do">To Do</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default Todolist;
