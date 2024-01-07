import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from "react";

const Testimonials = (props) => {
    const reviews = props.reviews;
    const [index, setIndex] = useState(0);


    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1); // nothing but n-1
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        //Math.random gives u a vlaue btw 0,1 bt v want it fmr 0 to n, so v hv to * it with n
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
 

    return (
        <div className="w-[55vw] md:w-[700] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700
        hover:shadow-xl rounded-md">
            <Card review={reviews[index]} ></Card>

            <div className="fex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
                <button
                    onClick={leftShiftHandler}
                    className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft />
                </button>
                <button
                    onClick={rightShiftHandler}
                    className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronRight />
                </button>

                <div className="mt-6">
                    <button
                        onClick={surpriseHandler}
                        className="bg-violet-500 transition-all duration cursor-pointer px-10 rounded-md font-bold 
                    text-white text-lg">
                        Surprise Me
                    </button>
                </div>
            </div>
        </div>

    )
};

export default Testimonials;