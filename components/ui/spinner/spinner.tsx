import "./spinner.sass";
import { ISpinner } from "./type";

const Spinner = ({ color }: ISpinner) => {
  return <div className={`spinner spinner_${color}`}></div>
}

export default Spinner;