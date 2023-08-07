import "./title.sass";
import { ITitle } from "./type";


const Title = ({ titleText }: ITitle) => {
  return <h1 className="title">{titleText}</h1>
}

export default Title;