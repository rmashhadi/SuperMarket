import React, { Component } from "react";
import SpecialOffers from "./SpecialOffers";
// These imports of css should be in the exact file you are making a carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const productList = [
  {
    Class: "offers",
    FirstPrice: "1,250,000",
    product: "ویلچر تمام ارتوپدی مدل SC-270",
    SecondPrice: "999,000",
    Image: "product1",
    discount: "%45 تخفیف"
  },
  {
    Class: "offers",
    FirstPrice: "1,250,000",
    product: "ویلچر تمام ارتوپدی مدل SC-270",
    SecondPrice: "999,000",
    Image: "product1",
    discount: "%21 تخفیف"
  },
  {
    Class: "offers",
    FirstPrice: "1,250,000",
    product: "ویلچر تمام ارتوپدی مدل SC-270",
    SecondPrice: "999,000",
    Image: "product1",
    discount: "%70 تخفیف"
  },
  {
    Class: "offers",
    FirstPrice: "1,250,000",
    product: "ویلچر خیابانی برقی ایستا مدل TCP/IP",
    SecondPrice: "999,000",
    Image: "product2",
    discount: "%25 تخفیف"
  },
  {
    Class: "offers",
    FirstPrice: "1,250,000",
    product: "عصای طبی چهارپایه مدل SE-197",
    SecondPrice: "999,000",
    Image: "product3",
    discount: "%90 تخفیف"
  },
  {
    Class: "offers",
    FirstPrice: "1,250,000",
    product: "ماشین تایپ ویژه نابینایان مدل پرکینز",
    SecondPrice: "999,000",
    Image: "product4",
    discount: "%10 تخفیف"
  }
];

export default class Resizable extends Component {
  state = {
    display: true,
    width: 200
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      // width of the whole carousel
      <div
        style={{
          height: "fit-content",
          color: "black",
          backgroundColor: "#fdccb8",
          // space between photos are decided by width of carousel that it is 60vw now
          width: "70%",
          padding: 24,
          margin: "auto"
        }}
      >
        <Slider {...settings}>
          {productList.map((productList, index) => {
            return (
              <SpecialOffers
                key={index}
                Class="offers"
                FirstPrice={productList.FirstPrice}
                product={productList.product}
                SecondPrice={productList.SecondPrice}
                Image={productList.Image}
                discount={productList.discount}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}
