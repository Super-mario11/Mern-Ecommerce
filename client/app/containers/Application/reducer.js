const initialState = {
  isMenuOpen: false,
  products: [],
  brands: [],
  categories: [],
  isLoading: false,
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartId: null
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default applicationReducer;
