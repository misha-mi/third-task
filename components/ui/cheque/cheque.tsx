import "./cheque.sass";
import BasketSVG from "@/lib/svg/basket-svg";
import { ICheque } from "./type";

const Cheque = ({ subscription, basket = false }: ICheque) => {
  return (
    <div className="cheque">
      <div className="cheque__name cheque__point">
        <p className="cheque__key">Package name</p>
        <p className="cheque__value">Price</p>
      </div>

      <div className="cheque__price cheque__point">
        <p className="cheque__key">{subscription.name}</p>
        <p className="cheque__value">
          ${subscription.price}
          {basket ? (
            <BasketSVG className="cheque__basket" />
          ) : null}
        </p>
      </div>
    </div>
  )
}

export default Cheque;