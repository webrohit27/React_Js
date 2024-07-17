import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { useEffect, useState } from 'react'
import Course_Card from './Course_Card';



const CourseSlider = ({Courses}) => {

  const [imageurl, setimageurl]=useState([]);
  useEffect(()=>{
    console.log("Hello");
    getImages();
  },[])

  function getImages(){
    Courses?.map((course,i)=>(
      setimageurl(course.thumbnail)
    ))
  }

  return (
    <>
       {Courses?.map((course,i)=>{
         <Course_Card course={course} key={i} Height={"h-[250px]"}/>
       })
       }
      
    </>
  )
}

export default CourseSlider
