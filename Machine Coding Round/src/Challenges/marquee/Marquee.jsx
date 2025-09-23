import React from 'react'
import '../../App.css'
import { Component } from './Component';

export const Marquee = () => {

const upperMarquee = [
  "/01.png",
  "/02.png",
  "/03.png",
  "/04.png",
  "/05.png",
  "/06.png",
  "/07.png",
  "/01.png",
  "/02.png",
  "/03.png",
  "/04.png",
  "/05.png",
  "/06.png",
  "/07.png",
  "/06.png",
  "/07.png",
  "/01.png",
  "/02.png",
  "/03.png",
  "/04.png",
  "/05.png",
  "/06.png",
  "/07.png",
];
const lowerMarquee = [
  "/01.png",
  "/02.png",
  "/03.png",
  "/04.png",
  "/05.png",
  "/06.png",
  "/07.png",
  "/01.png",
  "/02.png",
  "/03.png",
  "/04.png",
  "/05.png",
  "/06.png",
  "/07.png",
  "/06.png",
  "/07.png",
  "/01.png",
  "/02.png",
  "/03.png",
  "/04.png",
  "/05.png",
  "/06.png",
  "/07.png",
];

  return (
    <div className='container mx-auto flex flex-col gap-10'>
       <Component images={upperMarquee} from={0} to={"-100%"}/>
    </div>
  )
}
