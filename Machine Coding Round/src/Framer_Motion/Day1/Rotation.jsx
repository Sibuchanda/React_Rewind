import React from 'react'
import {motion} from 'motion/react'

export const Rotation = () => {
  return (
    <>
    <div className="container flex flex-col items-center justify-center gap-6">
     <motion.div className='w-50 h-50 bg-yellow-500 rounded-xl' animate={{rotate:360}} transition={{duration:1}}>
     </motion.div>

     <motion.div className='w-20 h-20 bg-blue-600 rounded-full'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
     >    
     </motion.div>
     </div>
    </>
  )
}
