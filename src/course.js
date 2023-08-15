import React from "react";
import './App.css'
export let Course =({image,title,description})=>{//parantez içindeki props yerine direk title, description yazmakta yeterli
   console.log({image,title,description})


        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img className="image" src={image} alt="görseller"/></figure>
                </div>
                <div className="card-content">
                    <div className="media">

                        </div>
                        <div className="media-content">
                            <p className="title is-4">{title }</p>

                        </div>
                    </div>

                    <div className="content">
                        {description}
                    </div>
                </div>
        )
}