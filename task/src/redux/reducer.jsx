import { ADD_USER, GET_USER, SHOW_USER, UPDATE_USER } from "./actionType";

const initialState = {
  users: [],
  currentUser: {},
  isActiveUpdate: false,
};

const userReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: payload,
        isActiveUpdate: false,
      };
    case SHOW_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case UPDATE_USER:
      const updated_user_List = state.users.map((responce) =>
        responce.id === payload.id
          ? {
              ...responce,
              first_name: payload.first_name,
              last_name: payload.last_name,
              email: payload.email,
              avatar: payload.avatar,
              id: payload.id,
            }
          : responce
      );
      const updateUserData = {
        ...state.currentUser,
        first_name: payload.first_name
          ? payload.first_name
          : state.currentUser.first_name,
        last_name: payload.last_name
          ? payload.last_name
          : state.currentUser.last_name,
        email: payload.email ? payload.email : state.currentUser.email,
        avatar: payload.avatar ? payload.avatar : state.currentUser.avatar,
        id: payload.id ? payload.id : state.currentUser.id,
      };
      return {
        ...state,
        users: updated_user_List,
        currentUser: updateUserData,
      };
    default:
      return state;
  }
};

export default userReducer;




