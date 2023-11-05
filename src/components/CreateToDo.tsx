import { useForm } from 'react-hook-form';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoState } from './atoms';

interface IForm {
  myToDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onSubmit = ({ myToDo }: IForm) => {
    setToDos((currentArray) => [
      { text: myToDo, id: Date.now(), category },
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
