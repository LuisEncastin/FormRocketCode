import React from 'react';

function useSessionStorage(itemName, initialValue) {

    // Create and save Items
    const [item, setItem] = React.useState(initialValue);

    // Error and loading. Se iba a añadir la funcionalidad "Loading", pero al final se omitió debido al tiempo de entrega y dado que no es un requerimiento explícito en la prueba.
    const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(true);

  //useeffect
  React.useEffect(() => {

    setTimeout(() => {

      try {
        
        // sessionStorage
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

  return {
    item,
    saveItem,
    // loading,
    error,
  };

  // Custom hook - sessionStorage en ejecución
  } 

export { useSessionStorage };