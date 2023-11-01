import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from './atoms';

interface IForm {
  myToDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onSubmit = ({ myToDo }: IForm) => {
    setToDos((currentArray) => [
      { text: myToDo, id: Date.now(), category: 'TO_DO' },
      ...currentArray,
    ]);
    setValue('myToDo', '');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('myToDo', {
            required: 'Please write your to do list',
          })}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateToDo;
