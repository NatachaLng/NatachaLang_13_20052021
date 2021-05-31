import React from "react";
import "./ProfilePage.css";
import {accounts} from "../../assets/Data";
import Accounts from "./Accounts";

class ProfilePage extends React.Component{
    render() {
        return(
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br/>Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    {accounts.map((elt) => (
                        <Accounts
                            key={elt.id}
                            title={elt.title}
                            amount={elt.amount}
                            description={elt.description}
                        />
                    ))}
                </section>
            </main>
        )
    }
}

export default ProfilePage;