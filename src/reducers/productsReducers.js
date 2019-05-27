const INTIAL_STATE = {
  products: [],
  Currentproducts: []
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return { ...state, products: [...action.payload], Currentproducts : [...action.payload] };
    case 'DELETE_PRODUCT':
      const currentProductToDelete = [...state.products]
      const indexToDelete = currentProductToDelete.findIndex(
        function (product) {
          return product.id === action.payload;
        }
      )
      return { ...state, products: [...currentProductToDelete.slice(0, indexToDelete), ...currentProductToDelete.slice(indexToDelete + 1)] };
    case 'GET_CATEGORY':
      const allcategory = [...state.products.map((product) => { return { category: product.catID } })]
      console.log(allcategory);
      const uniqueCategory = [];
      allcategory.map(product => {
        if (uniqueCategory.indexOf(product.category) === -1) {
          uniqueCategory.push(product.category)
          return null ;
        }
        return null ;
      });
      return { ...state, categories: uniqueCategory };
    case 'GET_PRODUCTS':    
      return { ...state, Currentproducts: [...state.products.filter((product) => product.catID === action.payload)] };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    default:
      return{...state } ;
  }
};