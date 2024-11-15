import { useContext} from 'react';
import './App.css';
import { TodoContext } from './context/TodoContext';

function App() {
  const { 
    todos, 
    text, 
    setText, 
    editingId, 
    setEditingId, 
    setEditText, 
    editText, 
    handleSubmit,  
    deleteTodo, 
    updateTodo} = useContext(TodoContext)

  return (
    <>
      <h1>TODOLIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>
          할 일 등록
        </button>
      </form>
      <div className='todo-list'>
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            {editingId !== todo.id && (
              <div className="todo-text">
                <p>{todo.id}. {todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
              <div className="todo-text">
                <input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <div className='button-container'>
              <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
              {editingId === todo.id ? (
                <button onClick={() => updateTodo(editingId, editText)}>
                  수정완료
                </button>
              ) : (
                <button onClick={() => setEditingId(todo.id)}>수정진행</button>
              )}
            </div>  
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
