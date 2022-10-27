export const getLocation = (keyword) => ({
  type: "GET_LOCATION",
  payload: keyword,
});

export const setLocation = (data) => ({
  type: "SET_LOCATION",
  payload: data,
});

export const setSelected = (data) => ({
  type: "SET_SELECTED",
  payload: data,
});
