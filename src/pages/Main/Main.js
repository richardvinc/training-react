import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';

export const Main = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Buy milk',
    },
    {
      id: 2,
      title: 'Buy apple',
    },
    {
      id: 3,
      title: 'Take a walk',
    },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
    };

    setTodos([...todos, newTodo]);
  };

  const onDelete = (id) => {
    const filteredTodo = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filteredTodo);
  };

  return (
    <div>
      <Header />
      <AddTodo tambah={addTodo} />
      <Todos todos={todos} hapus={onDelete} />
      <Footer />
    </div>
  );
};
