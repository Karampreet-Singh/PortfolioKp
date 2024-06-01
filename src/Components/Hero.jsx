import {motion} from "framer-motion"
import profileimg from "../assets/projects/karam.jpg"

const container = (delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})
export default function Hero() {
  return (
    <>
    <div className="border-b border-neutal-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking tight lg:mt-16 lg:text-6xl">
                        Karampreet Singh
                    </motion.h1>

                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        React Developer
                    </motion.span>

                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-3 max-w-xl py-6 fontlight tracking-tighter">
                    I am Karampreet Singh, A dedicated and Ambitious student, I have done my Bachelor of Technology (B.Tech) degree in Computer Science at Amritsar Group of Colleges. With a strong Academic Background and a Passion for web development, I have great interest in web development and I am always eager to learn and adopt new technologies in the ever-evolving field of web development.
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                     initial={{x:100,opacity:0}}
                     animate={{x:0,opacity:1}}
                     transition={{duration: 1, delay:1.2}}
                     src={profileimg} alt="karampreet" width={450} style={{
                        borderRadius: '50%', 
                        objectFit: 'cover' 
                    }}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
