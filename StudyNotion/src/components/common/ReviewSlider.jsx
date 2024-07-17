import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
import 'swiper/swiper-bundle.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
//import "swiper/css"
//import "swiper/css/free-mode"
//import "swiper/css/pagination"




import "../../App.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  

  // console.log(reviews)

  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
       
      </div>
    </div>
  )
}

export default ReviewSlider
