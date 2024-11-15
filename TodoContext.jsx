import {createContext, useState} from 'react';

// 데이터를 담고 있음
export const TodoContext = createContext();

export function TodoContextProvider({children}) {
    const [todos, setTodos] = useState([
        { id: 1, task: '투두 만들어보기' },
        { id: 2, task: '희연 혜원 혜윤 건 찬민' },
      ]);
    
      const [text, setText] = useState('');
      const [editingId, setEditingId] = useState(null);
      const [editText, setEditText] = useState('');
    
      // 렌더링(새로고침) 방지
      const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(); // 할 일을 추가하는 함수 호출
      };
    
      // 1. 추가하기
      const addTodo = () => {
        setTodos((prev) => [
          ...prev,
          { id: Math.floor(Math.random() * 100) + 2, task: text },
        ]);
        setText('');
      };
    
      // 2. 삭제하기
      const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
      };
    
      // 3. 수정하기
      const updateTodo = (id, text) => {
        setTodos((prev) =>
          prev.map((todo) => (todo.id === id ? { ...todo, task: text } : todo))
        );
        setEditingId(null);
        setEditText('');
      };

    return <TodoContext.Provider 
    value={{
        todos,
        setTodos, 
        text, 
        setText, 
        editingId, 
        setEditingId, 
        setEditText, 
        editText, 
        handleSubmit, 
        addTodo, 
        deleteTodo, 
        updateTodo
    }}>
        {children}
    </TodoContext.Provider>
}