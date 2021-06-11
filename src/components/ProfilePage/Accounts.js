import React from "react";

class Accounts extends React.Component {
    render() {
        const {title, amount, description} = this.props
        return (
            <section>
                <div className="account-content-wrapper">
                    <div>
                        <h3 className="account-title">{title}</h3>
                        <p className="account-amount">{amount}</p>
                        <p className="account-amount-description">{description}</p>
                    </div>
                    <div className="cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Accounts