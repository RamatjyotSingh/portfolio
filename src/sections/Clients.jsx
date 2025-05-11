import React from 'react'
import { clientReviews } from '../constants'

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">Hear from my clients</h3>
            <div className="client-container">
                {clientReviews.map(({id, name, review, img, position}) => (
                    <div key={id} className="client-review">
                        <div>
                            <p className="text-white font-light">{review}</p>
                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={img} alt="" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="semi-bold text-white-800">{name}</p>
                                        <p className="text-white-500 md:text-base text-sm">{position}</p>
                                    </div>
                                </div>
                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img key={index} className="w-5 h-5" alt="star" src="/assets/star.png" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Clients