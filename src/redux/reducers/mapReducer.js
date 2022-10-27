const initialState = {
  locations: [],
  selected: { lat: 43.45, lng: -80.49 },
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        locations: action.payload,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};
