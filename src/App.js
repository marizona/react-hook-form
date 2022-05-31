import { Route, Routes } from "react-router-dom";
import Step1 from "./Step1";
import Step3 from "./Step3";
import Step2 from "./Step2";
import Result from "./Result";
import Step4 from "./Step4";
import StepOne from "./components/kebab/StepOne.js"
import StepTwo from "./components/kebab/StepTwo.js"
import StepThree from "./components/kebab/StepThree.js";
import StepFour from "./components/kebab/StepFour.js";
import Resultss from "./components/kebab/Resultss";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/result" element={<Result />} />
        <Route path="/stepOne" element={<StepOne/>} />
        <Route path="/stepTwo" element={<StepTwo />} />
        <Route path="/stepThree" element={<StepThree />} />
        <Route path="/stepFour" element={<StepFour />} />
        <Route path="/resultss" element={<Resultss />} />
      </Routes>
    </>
  );
}

export default App;
