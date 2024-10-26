export const initialState = {
  cartData: [],
};

export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action);
      return {
        cartData: [...state.cartData, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (cart) => cart.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}
