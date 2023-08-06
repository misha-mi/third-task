import "./title.sass";

const Title = ({ titleText }: { titleText: string }) => {
  return <h1 className="title">{titleText}</h1>
}

export default Title;