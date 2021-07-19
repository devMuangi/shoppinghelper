import React from 'react';

const ItemsContext = React.createContext({
  items: [],
  prices:[],
  pricesDispatch:()=>{},
  itemsDispatch: () => {},
});

export { ItemsContext as default };
