import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import IconBtn from '../../../common/IconBtn';
import { BuyCourse } from '../../../../services/operations/studentFeaturesAPI';

const RenderTotalAmount = () => {

  const { total, cart } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()


    const handleBuyCourse = () => {
        const courses = cart.map((course) => course._id);
        console.log("Bought these course:", courses);
        BuyCourse(token, courses, user, navigate, dispatch)
        //TODO: API integrate -> payment gateway tak leke jaegi
    }
  return (
    <div>

        <p>Total:</p>
        <p>Rs {total}</p>

        <IconBtn 
            text="Buy Now"
            onclick={handleBuyCourse}
            customClasses={"w-full justify-center"}
        />
        
    </div>
  )
}

export default RenderTotalAmount
