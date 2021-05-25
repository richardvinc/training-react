import { useState } from 'react';

export const AddTodo = ({ tambah }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return;
    }

    tambah(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmit} className='rounded flex p-4'>
      <input className='flex-1 rounded bg-gray-100' type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button className='hover:text-white hover:bg-green-400 p-2 rounded' type='submit'>
        Submit
      </button>
    </form>
  );
};
