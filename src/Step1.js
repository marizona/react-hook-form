import { Checkbox } from "material-ui";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBase } from "./components/actions/actionss";

function Step1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const base = useSelector((state) => state.base);

  const { register, handleSubmit } = useForm({ defaultValues: { base } });

  const onSubmit = (data) => {
    dispatch(addBase(data.base));
    navigate("/step2");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3 htmlFor="base">Pick base</h3>
        <label htmlFor="base">Small</label>
        <input
          type="checkbox"
          name="base"
          value="small"
          id="base"
          {...register("base")}
        />
        <label htmlFor="base">Medium</label>
        <input
          type="checkbox"
          name="base"
          value="medium"
          id="base"
          {...register("base")}
        />
        <label htmlFor="base">Large</label>
        <input
          type="checkbox"
          name="base"
          value="large"
          id="base"
          {...register("base")}
        />

        {/* <select name="base" id="base" {...register("base")}>
          <option value="small">small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select> */}
      </div>
      <button>Next</button>
    </form>
  );
}

export default Step1;
