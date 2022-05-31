import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBread } from "../actions/actionss";

function StepOne() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bread = useSelector((state) => state.bread);

  const { register, handleSubmit } = useForm({ defaultValues: { bread } });

  const onSubmit = (data) => {
    dispatch(addBread(data.bread));
    navigate("/stepTwo");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="bread">Pick bread</label>
        <select name="bread" id="bread" {...register("bread")}>
          <option value="round">Round</option>
          <option value="long">Long</option>
          <option value="triangle">Triangle</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

export default StepOne;
