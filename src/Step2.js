import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSauce } from "./components/actions/actionss";

function Step2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sauce = useSelector((state) => state.base);

  const { register, handleSubmit } = useForm({ defaultValues: { sauce } });

  const onSubmit = (data) => {
    dispatch(addSauce(data.sauce));
    navigate("/step3");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="sauce">Pick sauce</label>

        <textarea
          name="sauce"
          data-customvalue="no_sauce"
          id="sauce"
          cols="10"
          rows="5"
          {...register("sauce")}
       
        ></textarea>
        {/* <select name="sauce" id="sauce" {...register("sauce")}>
          <option value="no_sauce">No sauce</option>
          <option value="tomato_sauce">Tomato sauce</option>
          <option value="white_sauce">White saue</option>
        </select> */}
      </div>
      <button>Next</button>
    </form>
  );
}

export default Step2;
