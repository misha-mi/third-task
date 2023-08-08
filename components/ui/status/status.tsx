import "./status.sass";
import { IStatus } from "./type";


const Status = ({ status }: IStatus) => {
  return <p className={`status status_${status}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</p>;
}

export default Status;