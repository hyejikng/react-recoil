import { todo } from 'node:test';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

interface IForm {
  myToDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE'; //아무 string을 받는게 아니라고 제한을 만들어주는 역할.
}

const toDoState = atom<IToDo[]>({
  key: 'toDoList',
  default: [], //기본 default값을 빈 배열로 설정. list로 정리할 것이므로.
});

function Todolist() {
  // const value = useRecoilValue(toDoState); // the defaul type is an array -> value: []
  // const modFn = useSetRecoilState(toDoState);
  // const [value, modFn] = useRecoilValue(toDoState);
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ myToDo }: IForm) => {
    setToDos((currentArray) => [
      { text: myToDo, id: Date.now(), category: 'TO_DO' },
      ...currentArray,
    ]);
    setValue('myToDo', '');
  };
  console.log(toDos);

  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('myToDo', {
            required: 'Please write your to do list',
          })}
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
