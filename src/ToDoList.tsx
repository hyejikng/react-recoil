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
  extraErrors: string;
}

function Todolist() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const onValid = (data: IForm) => {
    if (data.Password !== data.Password1) {
      setError(
        'Password1',
        { message: 'Password should be the same.' },
        { shouldFocus: true } // 에러가 발생한 input을 Focus해주는 코드.
      );
    }
    // setError('extraErrors', { message: 'Server Offline' });
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
        {...register('FirstName', {
          required: true,
          //   validate: (value) => !value.includes('Coco'),
          validate: {
            noCoco: (value) =>
              value.includes('Coco') ? 'no Coco allowed' : true,
            noGigi: (value) =>
              value.includes('Gigi') ? 'no Coco allowed' : true,
          },
        })}
        placeholder="First Name"
      />
      <span>{errors?.FirstName?.message}</span>
      <input
        {...register('LastName', {
          required: true,
        })}
        placeholder="Last Name"
      />
      <span>{errors?.LastName?.message}</span>
      <input
        {...register('Username', { required: true, minLength: 4 })}
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
          required: 'Repeat your password',
          minLength: {
            value: 9,
            message: 'Your password is too short.',
          },
        })}
        placeholder="Password1"
      />
      <span>{errors?.Password1?.message}</span>
      <button>Add</button>
      {/* <span>{errors?.extraErrors?.message}</span> */}
      {/* error가 있으면 -> extraErrors -> message전달까지, error가 있지만 extraErrors가 아니면 message x 즉, 물음표를 붙이는게 중요하다. */}
    </form>
  );
}

export default Todolist;
