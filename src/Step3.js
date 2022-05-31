import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCrust } from "./components/actions/actionss";

function Step3() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const crust = useSelector((state) => state.base);

  const { register, handleSubmit } = useForm({ defaultValues: { crust } });

  const onSubmit = (data) => {
    dispatch(addCrust(data.crust));
    navigate("/step4");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="crust">Pick crust</label>
        <select name="crust" id="crust" {...register("crust")}>
          <option value="classic_thin">Classic_thin</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

export default Step3;
