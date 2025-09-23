import React from "react";
import { motion } from "motion/react";

export const Component = ({ images, from, to }) => {
  return (
    <>
      {/* upperMarquee  */}
      <div className="flex MyGradient">
        <motion.div
          initial={{ x: { from } }}
          animate={{ x: `${to}` }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center justify-center"
        >
          {images.map((image, index) => {
            return <img src={image} key={index} className="w-25 h-25 pr-6" />;
          })}
        </motion.div>
        <motion.div
          initial={{ x: { from } }}
          animate={{ x: `${to}` }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center justify-center"
        >
          {images.map((image, index) => {
            return <img src={image} key={index} className="w-25 h-25 pr-6" />;
          })}
        </motion.div>
      </div>

      {/* lowerMarquee  */}
      <div className="flex MyGradient">
        <motion.div
          initial={{ x: `${to}` }}
          animate={{ x: from }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center justify-center"
        >
          {images.map((image, index) => {
            return <img src={image} key={index} className="w-25 h-25 pr-6" />;
          })}
        </motion.div>
        <motion.div
          initial={{ x: `${to}` }}
          animate={{ x: from }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center justify-center"
        >
          {images.map((image, index) => {
            return <img src={image} key={index} className="w-25 h-25 pr-6" />;
          })}
        </motion.div>
      </div>
    </>
  );
};
