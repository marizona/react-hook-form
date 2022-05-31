import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVeg } from "../actions/actionss";

function StepThree() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const veg = useSelector((state) => state.veg);

  const { register, handleSubmit } = useForm({ defaultValues: { veg } });

  const onSubmit = (data) => {
    dispatch(addVeg(data.veg));
    navigate("/stepFour");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="veg">Pick veg</label>
        <select name="veg" id="veg" {...register("veg")}>
          <option value="salad">Salad</option>
          <option value="tomatoes">Tomatoes</option>
          <option value="onion">Onion</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

export default StepThree;
