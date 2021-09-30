import React, { useState } from "react";
import Course from "../Course/Course";
import courseData from "../../dummyData/courseData";
import "./Shop.css";
import Cart from "../Cart/Cart";
const Shop = () => {
  const [course, setCourse] = useState(courseData);
  const [cart, setCart] = useState([]);

  const handleButton = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };
  return (
    <div className="shop">
      <div className="course-container">
        {course.map((course) => (
          <Course course={course} handleButton={handleButton}></Course>
        ))}
      </div>

      <div className="cart_container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
