import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDressing } from "../actions/actionss";

function StepFour() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dressing = useSelector((state) => state.dressing);

  const { register, handleSubmit } = useForm({ defaultValues: { dressing } });

  const onSubmit = (data) => {
    dispatch(addDressing(data.dressing));
    navigate("/resultss");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="dressing">Pick dressing</label>
        <select name="dressing" id="dressing" {...register("dressing")}>
          <option value="white">White</option>
          <option value="harissa">Harissa</option>
          <option value="ketchup">Ketchup</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

export default StepFour;
