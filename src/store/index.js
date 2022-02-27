import React, {useContext, useEffect, useState} from 'react';
import {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StoreContext = createContext([]);

export const StoreComponent = props => {
  const [favorites, setFavorites] = useState([]);
  const [toWatchList, setToWatchList] = useState([]);

  const fetchStore = async () => {
    const store = await AsyncStorage.getItem('@dam_example');
    if (store) {
      const parsedStore = JSON.parse(store);
      setFavorites(parsedStore.favorites);
      setToWatchList(parsedStore.toWatchList);
    }
  };

  // Trae la lista de favorites y toWatchList al iniciar la app
  useEffect(() => {
    // Creacion
    fetchStore();
  }, []);

  // Guarda en el store en cada modificación de favorites o towatchlist
  useEffect(() => {
    AsyncStorage.setItem(
      '@dam_example',
      JSON.stringify({favorites, toWatchList}),
    );
  }, [favorites, toWatchList]);

  function reemplazarDuplicados(value, index, self) { 
    return (self.indexOf(value) === index)?value:'';
}

  const initialState = {
    favorites,
    addFavorites: movie => setFavorites(prevState => [...prevState, movie]),
    listFavorites: movie => setFavorites(...new Set(favorites.indexOf(movie))),
    toWatchList,
    addToWatchList: movie => setToWatchList(prevState => [...prevState, movie]),
  };

  return <StoreContext.Provider value={initialState} {...props} />;
};

let letras = ['A', 'B', 'A', 'C', 'B'];
let letrasUnicas = [];

console.log(letrasUnicas);


/*const result = [];
favorites.forEach((item)=>{
  //pushes only unique element
    if(!result.includes(item)){
    result.push(item);
  }
})

console.log(result);
*/
export const useStore = () => {
  const ctx = useContext(StoreContext);
  return ctx;
};
