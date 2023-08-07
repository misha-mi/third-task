
import "./cheque.sass";

interface ICheque {
  subscription: {
    name: string
    price: string
  }
}

const Cheque = ({ subscription }: ICheque) => {
  return (
    <div className="cheque">
      <div className="cheque__name cheque__point">
        <p className="cheque__key">Package name</p>
        <p className="cheque__value">Price</p>
      </div>

      <div className="cheque__price cheque__point">
        <p className="cheque__key">{subscription.name}</p>
        <p className="cheque__value">
          ${subscription.price}+ иконка
        </p>
      </div>
    </div>
  )
}

export default Cheque;