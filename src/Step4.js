import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCheese } from "./components/actions/actionss";

function Step4() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cheese = useSelector((state) => state.base);

  const { register, handleSubmit } = useForm({ defaultValues: { cheese } });

  const onSubmit = (data) => {
    dispatch(addCheese(data.cheese));
    navigate("/result");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cheese">Pick cheese</label>
        <select name="cheese" id="cheese" {...register("cheese")}>
          <option value="no_cheese">No cheese</option>
          <option value="mozzarella">Mozzarella</option>
          <option value="gruyere">Gruyère</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

export default Step4;
