import "./status.sass";

import { IStatus } from "./type";


const Status = ({ status }: IStatus) => {
  return <p className={`status status_${status.toLowerCase()}`}>{status.charAt(0) + status.slice(1).toLowerCase()}</p>;
}

export default Status;