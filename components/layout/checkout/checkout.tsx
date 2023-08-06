import "./checkout.sass";
import Button from "@/components/ui/button/button";
import Cheque from "@/components/ui/cheque/cheque";

const Checkout = () => {
  return (
    <div className="checkout">
      <h2 className="checkout__title">Checkout</h2>

      <div className="checkout__cheque">
        <Cheque />
      </div>

      <div className="checkout__total">
        <p className="checkout__key">Total:</p>
        <p className="checkout__value">
          $77
        </p>
      </div>

      <div className="checkout__button">
        <Button text="Purchase" width="w200px" />
      </div>
    </div>
  )
}

export default Checkout;