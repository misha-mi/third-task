import "./title.sass";
import { ITitle } from "./type";


const Title = ({ titleText, type = "h1" }: ITitle) => {
  let title: React.ReactElement;

  switch (type) {
    case "h2":
      title = (<h2 className="title">{titleText}</h2>);
      break;
    case "h1":
    default:
      title = (<h1 className="title">{titleText}</h1>);
  }

  return title;
}

export default Title;