import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

const Counter = ({x}) => {
  return (
    <div><CountUp end={x} redraw={false} duration={2}>
    {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
              <motion.span
              initial={{
                opacity:0
              }} 
              animate={{
                opacity:1
              }}
              transition={{duration: 2, ease: "easeInOut"}}
              ref={countUpRef} >
                </motion.span>
          </VisibilitySensor>
      )}
    </CountUp>
    <motion.span
              initial={{
                opacity:0
              }} 
              animate={{
                opacity:1
              }}
              transition={{duration: 2, ease: "easeInOut"}}>
                +
                </motion.span></div>
  )
}

export default Counter