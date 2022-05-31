import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMeat} from "../actions/actionss";

function StepTwo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const meat= useSelector((state) => state.meat);

  const { register, handleSubmit } = useForm({ defaultValues: { meat} });

  const onSubmit = (data) => {
    dispatch(addMeat(data.meat));
    navigate("/stepThree");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="meat">Pick meat</label>
        <select name="meat" id="meat" {...register("meat")}>
          <option value="kebab">Kebab</option>
          <option value="cordon_bleu">Cordon Bleu</option>
          <option value="chicken_tenders">Chicken Tenders</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
}

export default StepTwo;
