import { TodoItem } from './TodoItem';

export const Todos = ({ todos, hapus }) => {
  return (
    <div className='px-4'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} remove={hapus} />
      ))}
    </div>
  );
};
