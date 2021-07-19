const pricesReducer = (state, action) => {
    switch (action.type) {
      case 'POPULATE_PRICES':
        return action.prices;
      case 'ADD_PRICE':
        return [...state, action.price];
      case 'REMOVE_PRICE':
        return state.filter((price) => price !== action.itemToBeDeleted);
      default:
        return state;
    }
  };
  
  export { pricesReducer as default };
  