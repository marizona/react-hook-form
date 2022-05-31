import {
  CHOOSE_BASE,
  CHOOSE_CRUST,
  CHOOSE_SAUCE,
  CHOOSE_CHEESE,
  CHOOSE_BREAD,
  CHOOSE_DRESSING,
  CHOOSE_MEAT,
  CHOOSE_VEG
} from "../constants/constants";

export const addCrust = (crust) => {
  return {
    type: CHOOSE_CRUST,
    payload: crust,
  };
};
export const addSauce = (sauce) => {
  return {
    type: CHOOSE_SAUCE,
    payload: sauce,
  };
};

export const addCheese = (cheese) => {
  return {
    type: CHOOSE_CHEESE,
    payload: cheese,
  };
};

export const addBase = (base) => {
  return {
    type: CHOOSE_BASE,
    payload: base,
  };
};

export const addMeat = (meat) => {
  return {
    type: CHOOSE_MEAT,
    payload: meat,
  };
};
export const addDressing = (dressing) => {
  return {
    type: CHOOSE_DRESSING,
    payload: dressing,
  };
};

export const addVeg = (veg) => {
  return {
    type: CHOOSE_VEG,
    payload: veg,
  };
};

export const addBread = (bread) => {
  return {
    type: CHOOSE_BREAD,
    payload: bread,
  };
};