import React from "react";
import "./category.css";
import Image from "next/image";
import img from '../../assets/imgs/two-women-in-front-of-dry-erase-board-1181533.png'

const Category = () => {
  return (
    <>
      <div className="bg_category">
        <div className="container">
          <div className="titile">
            <h1>Business</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <h4>Blog Business</h4>
          </div>
        </div>
      </div>

      <div className="container">
        <form className="category_form">
          <input type="text" placeholder="Searching ..." />
        </form>

        <div className="grid_elment">
              <div className="card_category">
                <div>
                  <Image src={img}  alt="img"  width={445} height={312}/>
                </div>
                <div className="card_category_text_content">
                  <h3>Business</h3>
                  <h2>Top 6 free website mockup tools 2022</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </div>
              </div>

              <div className="card_category">
                <div>
                  <Image src={img}  alt="img"  width={445} height={312}/>
                </div>
                <div className="card_category_text_content">
                  <h3>Business</h3>
                  <h2>Top 6 free website mockup tools 2022</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </div>
              </div>

              <div className="card_category">
                <div>
                  <Image src={img}  alt="img"  width={445} height={312}/>
                </div>
                <div className="card_category_text_content">
                  <h3>Business</h3>
                  <h2>Top 6 free website mockup tools 2022</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </div>
              </div>

              <div className="card_category">
                <div>
                  <Image src={img}  alt="img"  width={445} height={312}/>
                </div>
                <div className="card_category_text_content">
                  <h3>Business</h3>
                  <h2>Top 6 free website mockup tools 2022</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
                </div>
              </div>
        </div>
      </div>

    </>
  );
};

export default Category;
