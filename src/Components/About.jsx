import kp from "../assets/projects/kp.png"
import {motion} from "framer-motion"

export default function About() {
  return (
    <>
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About me</h1>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex item-center justify-center">
                    <img src={kp} alt="kp" style={{
                       borderRadius: '50%', 
                       objectFit: 'cover' 
                    }}/>
                </div>
            </motion.div>

            <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center         lg:justify-start">
                        <p className="my-6 max-w-xl py-6">
                        I am Karampreet Singh, a passionate and driven student who recently earned a Bachelor of Technology (B.Tech) degree in Computer Science from Amritsar Group of Colleges.  With a strong focus on web development, I have gained substantial expertise in React.js. I am enthusiastic about leveraging my skills to build dynamic and user-friendly web applications, and I am always eager to learn and adopt new technologies in the ever-evolving field of web development.
                        </p>
                    </div>
            </motion.div>
        </div>
    </div>
    </>
  )
}
