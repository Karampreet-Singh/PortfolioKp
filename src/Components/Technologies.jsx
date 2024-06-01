import { RiNodejsLine, RiReactjsLine } from "react-icons/ri"
import { RiJavascriptFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import {motion} from "framer-motion"

const iconVariants=(duration)=>({
    initial:{y: -10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export default function Technologies() {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap item-center justify-center gap-4">

            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 borer-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-400"/>
            </motion.div>

            <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 borer-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-blue-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 borer-neutral-800 p-4">
                <RiJavascriptFill className="text-7xl text-yellow-400"/>
            </motion.div>

            <motion.div
            variants={iconVariants(8.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 borer-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div
            variants={iconVariants(10.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 borer-neutral-800 p-4">
                <RiNodejsLine className="text-7xl text-green-400"/>
            </motion.div>

            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 borer-neutral-800 p-4">
                <SiMysql className="text-7xl "/>
            </motion.div>

        </motion.div>
      </div>
    </>
  )
}
