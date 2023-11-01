// import { useState } from 'react';
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

interface IForm {
  errors: {
    email: {
      message: string;
    };
  };
  FirstName: string;
  LastName: string;
  email: string;
  Password: string;
  Password1: string;
  Username: string;
}

function Todolist() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  //   console.log(useForm());

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver\.com$/gm,
            message: 'Only naver.com emails allowed',
          },
        })}
        placeholder="Email"
      />
      <span>{errors?.email?.message}</span>
      <input
        {...register('FirstName', { required: true })}
        placeholder="First Name"
      />
      <span>{errors?.FirstName?.message}</span>
      <input
        {...register('LastName', { required: true })}
        placeholder="Last Name"
      />
      <span>{errors?.LastName?.message}</span>
      <input
        {...register('Username', { required: true, minLength: 6 })}
        placeholder="Username"
      />
      <span>{errors?.Username?.message}</span>
      <input
        {...register('Password', {
          required: 'Password is required',
          minLength: { value: 9, message: 'Your Password is too short' },
        })}
        placeholder="Password"
      />
      <span>{errors?.Password?.message}</span>
      <input
        {...register('Password1', {
          required: 'Password is required',
          minLength: {
            value: 5,
            message: 'Your password is too short.',
          },
        })}
        placeholder="Password1"
      />
      <span>{errors?.Password1?.message}</span>
      <button>Add</button>
    </form>
  );
}

export default Todolist;
