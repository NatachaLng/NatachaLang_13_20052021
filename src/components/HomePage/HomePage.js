import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import {features} from "../../assets/Data";

class HomePage extends React.Component{
    render() {
        return(
            <main>
                <>
                    <Hero/>
                    <section className="features">
                        <h2 className="sr-only">Features</h2>
                        {features.map((elt) => (
                            <Features
                                key={elt.id}
                                imgSrc={elt.imgSrc}
                                imgAlt={elt.imgAlt}
                                title={elt.title}
                                description={elt.description}
                            />
                        ))}
                    </section>
                </>
            </main>
        )
    }
}

export default HomePage