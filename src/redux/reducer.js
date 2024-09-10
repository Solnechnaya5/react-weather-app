const initialState = {
    favoriteCities: [],
  };
  
  export const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CITY:
        return { ...state, favoriteCities: [...state.favoriteCities, action.payload] };
      case REMOVE_CITY:
        return { ...state, favoriteCities: state.favoriteCities.filter(city => city !== action.payload) };
      default:
        return state;
    }
  };
  