import React from 'react';
// import { useLocalStorage } from '../TodoContext/customHooks';

const ToDoContext = React.createContext();

//React.createContext incuye 2 elementos:
//<ToDoContext.Provider></ToDoContext.Provider> => las propiedades que queremos exportar
//<ToDoContext.Consumer></ToDoContext.Consumer> => lo que nos permitirá consumirlas.

function formProvider (props) {

    // Custom hook - localStorage
//   const {
//     item: toDos,
//     saveItem: saveToDos,
//     loading,
//     error,
//     } = useLocalStorage('TODOS_V1', []);

  // State
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addToDo,
            completeToDo, 
            deleteToDo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider};