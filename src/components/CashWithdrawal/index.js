// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onWithdraw = value => {
    this.setState(prevState => {
      if (prevState.balance >= value) {
        return {balance: prevState.balance - value}
      }
      return null // No change if balance is less than the denomination value
    })
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="icon-container">
              <h1 className="letter">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <div>
              <p className="description">Your Balance</p>
            </div>
            <div>
              <p className="balance-details">{balance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="buttons-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  denominationDetails={eachDenomination}
                  key={eachDenomination.id}
                  onWithdraw={this.onWithdraw} // Pass the function to handle balance deduction
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
