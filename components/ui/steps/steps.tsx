import "./steps.sass";

const Steps = () => {

  return (
    <ul className="steps">
      <li className="steps__step">
        <h2 className="steps__name">Create account</h2>
        <div className="steps__indicator steps_active"></div>
      </li>
      <li className="steps__step">
        <h2 className="steps__name">Log in</h2>
        <div className="steps__indicator"></div>
      </li>
      <li className="steps__step">
        <h2 className="steps__name">Checkout</h2>
        <div className="steps__indicator"></div>
      </li>
    </ul>
  )
}

export default Steps;