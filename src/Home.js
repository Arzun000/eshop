import React from "react";
import "./Home.css"; 
import Product from "./Product";

export default function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Flagship_100_Blog_2880x1800_Apparel.jpg" alt="" className="home__image"></img>

                    <div className="home__row">
                        <Product
                            id="11"
                            title="Item ONE"
                            price={11.9}
                            rating={2}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg30hJpPLjnAYutAxEhkLLZ6gN54FUbFbm6A&usqp=CAU"
                        />
                        <Product
                            id="13"
                            title="Item TWO"
                            price={131.9}
                            rating={3}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg30hJpPLjnAYutAxEhkLLZ6gN54FUbFbm6A&usqp=CAU"
                        />
                    </div>
                    <div className="home__row">
                    <Product
                        id="13"
                        title="Item threE"
                        price={1221.9}
                        rating={1}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg30hJpPLjnAYutAxEhkLLZ6gN54FUbFbm6A&usqp=CAU"
                    />
                    <Product
                        id="14"
                        title="Item four"
                        price={1001.8}
                        rating={5}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg30hJpPLjnAYutAxEhkLLZ6gN54FUbFbm6A&usqp=CAU"
                    />
                    <Product
                        id="15"
                        title="Item fivE"
                        price={99.9}
                        rating={1}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg30hJpPLjnAYutAxEhkLLZ6gN54FUbFbm6A&usqp=CAU"
                    />
                    </div>
                    <div className="home__row">
                    <Product
                        id="16"
                        title="Item SIx"
                        price={11563.9}
                        rating={4}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg30hJpPLjnAYutAxEhkLLZ6gN54FUbFbm6A&usqp=CAU"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}
