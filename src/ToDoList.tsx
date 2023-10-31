import { useState } from 'react';

function Todolist() {
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
}

export default Todolist;
