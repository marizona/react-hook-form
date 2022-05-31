import {
  CHOOSE_BASE,
  CHOOSE_CRUST,
  CHOOSE_SAUCE,
  CHOOSE_CHEESE,
  CHOOSE_BREAD,
  CHOOSE_DRESSING,
  CHOOSE_VEG,
  CHOOSE_MEAT,
} from "../constants/constants";

const initialState = {
  pizza: 
    {
      base: "small",
      crust: "classic_thin",
      sauce: "no_sauce",
      cheese: "no_cheese",
    },
  
  kebab: 
    {
      bread: "round",
      veg: "salad",
      dressing: "white",
      meat: "kebab",
    },
  
};

export const chooseIngredients = (state = initialState.pizza, action) => {
  switch (action.type) {
    case CHOOSE_BASE:
      return { ...state, base: action.payload };
    case CHOOSE_CRUST:
      return { ...state, crust:action.payload };
    case CHOOSE_CHEESE:
      return { ...state, cheese: action.payload };
    case CHOOSE_SAUCE:
      return { ...state, sauce:action.payload };
    default:
      return state;
  }
};

export const chooseToppings = (state=initialState.kebab, action) => {
  switch (action.type) {
    case CHOOSE_BREAD:
      return { ...state, bread: action.payload };
    case CHOOSE_DRESSING:
      return { ...state, dressing: action.payload };
    case CHOOSE_VEG:
      return { ...state, veg: action.payload };
    case CHOOSE_MEAT:
      return { ...state, meat: action.payload };
    default:
      return state;
  }
};
