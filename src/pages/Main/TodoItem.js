export const TodoItem = ({ todo, remove }) => {
  return (
    <div className='flex flex-row'>
      <span className='flex-1'>{todo.title}</span>
      <span className='flex-none p-2 rounded-md font-bold hover:text-red-400 hover:bg-red-200' onClick={() => remove(todo.id)}>
        {' '}
        X{' '}
      </span>
    </div>
  );
};
