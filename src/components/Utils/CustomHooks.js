import React from 'react';
// import { useEffect } from 'react';

// itemName => El nombre de lo que buscará, o creará, y
// initialValue => El estado inicial de la variable(puede ser un objeto {}, un array [], un string vacío “”, etc)

function useSessionStorage(itemName, initialValue) {

    // Create and save Item
    const [item, setItem] = React.useState(initialValue);

    // Error and loading
    const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(true);

  //useeffect
  React.useEffect(() => {
    //Simulating API
    setTimeout(() => {

      try {
        
        // localStorage
        const sessionStorageItem = sessionStorage.getItem(itemName);
        let parsedItem;

        if (!sessionStorageItem) {
          sessionStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem= JSON.parse(sessionStorageItem);
        } 

        setItem(parsedItem);
        // setLoading(false);

      } catch (error) {
        
        setError(error);

      }

    }, 1000);
  }, []);

  const saveItem = (newItem) => {

    try {
      const stringifiedItem = JSON.stringify(newItem);
      sessionStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }


  }

  // Definir el lugar donde se guardará la variable => item,
  // implementar una funcion que se encargue de actualizar el valor de la variable => saveItem.
  // RETORNAR la variable y la funcion en forma de array!
  return {
    item,
    saveItem,
    // loading,
    error,
  }

  // itemName se convierte en Item, y save item es lo que nos ayuda a guardarlo
  // Custom hook - sessionStorage en ejecución
  // const [toDos, saveToDos] = useSessionStorage('TODOS_V1', []);
  // const {item: toDos, saveItem: saveToDos, loading} = useSessionStorage('TODOS_V1', []);

  }

export { useSessionStorage };