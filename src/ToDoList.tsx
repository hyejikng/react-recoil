import { useState } from 'react';
import { useForm } from 'react-hook-form';

/* function Todolist() {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          placeholder="Write a todo"
          type="text"
        />
        <button>Add</button>
      </form>
    </div>
  );
} */

function Todolist() {
  const { register, watch } = useForm();
  console.log(useForm());
  console.log(register('todo'));
  return (
    <form>
      <input {...register('email')} placeholder="Write a To-Do List" />
      <input {...register('FirstName')} placeholder="First Name" />
      <input {...register('LastName')} placeholder="Last Name" />
      <input {...register('Username')} placeholder="Usernamet" />
      <input {...register('Password')} placeholder="Password" />

      <button>Add</button>
    </form>
  );
}

export default Todolist;
