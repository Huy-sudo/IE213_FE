import { action_type as type } from "./action";

const initialState = {
  loading: false,
  data: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
