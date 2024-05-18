import React from 'react';
import Card from './Card';

function Cards(props) {
  const courses = props.courses;

  function getCourses() {
    let allCourses = [];
    // Check if courses is not null or undefined before iterating
    if (courses) {
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourses.push(courseData);
        });
      });
    }
    return allCourses; // Return the allCourses array
  }

  return (
    <div>
      {/* Check if courses is not null or undefined before mapping */}
      {courses && getCourses().map(course => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
 