
import "./cheque.sass";

const Cheque = () => {
  return (
    <div className="cheque">
      <div className="cheque__name cheque__point">
        <p className="cheque__key">Package name</p>
        <p className="cheque__value">Price</p>
      </div>

      <div className="cheque__price cheque__point">
        <p className="cheque__key">Single site license</p>
        <p className="cheque__value">
          $77 + иконка
        </p>
      </div>
    </div>
  )
}

export default Cheque;