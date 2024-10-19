// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onWithdraw} = props
  const {value} = denominationDetails

  const handleWithdraw = () => {
    onWithdraw(value)
  }

  return (
    <li className="denomination-item">
      <button
        className="withdraw-button"
        type="button"
        onClick={handleWithdraw} // Trigger the withdrawal
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
