import React from "react";
import "./Features.css"

class Features extends React.Component {

    render() {
        const { imgSrc, imgAlt, title, description } = this.props
        return (
            <div className="feature-item">
                <img src={`../../img/${imgSrc}`} alt={imgAlt} className="feature-icon"/>
                <h3 className="feature-item-title">{title}</h3>
                <p>
                    {description}
                </p>
            </div>)
    }
}

export default Features