import "./spinner.sass";

const Spinner = ({ color }: { color: "primary1" | "color100" }) => {
  return <div className={`spinner spinner_${color}`}></div>
}

export default Spinner;