import React, { useEffect, useReducer } from 'react';
import ItemsContext from '../context/items-context';
import itemsReducer from '../reducers/items';
import pricesReducer from '../reducers/prices'
import AddItemForm from './AddItemForm';
import './App.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Logo from './Logo'

function App() {
  const [items, itemsDispatch] = useReducer(itemsReducer, []);
  const [prices,pricesDispatch] = useReducer(pricesReducer, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      itemsDispatch({ type: 'POPULATE_ITEMS', items });
    }
  }, []);

  useEffect(()=>{
    const prices = JSON.parse(localStorage.getItem('prices'));
    if (prices){
      pricesDispatch({type: 'POPULATE_PRICES', prices});
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('prices', JSON.stringify(prices));
  }, [prices]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider value={{ items, itemsDispatch,pricesDispatch, prices }}>
      <div className="App"> 
      <Logo/>     
        <header className="App-header">
          <AddItemForm />
          {items.length > 0 &&  <ItemCount items={items}/>}
          <ItemList />
        </header>
      </div>
    </ItemsContext.Provider>
  );
}

export default App;
