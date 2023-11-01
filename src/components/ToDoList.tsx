import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string;
}

function Todolist() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {};

  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('toDo', {
            required: 'Please write your to do list',
          })}
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default Todolist;
