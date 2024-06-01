import {PROJECTS} from "../index"
const Projects = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        <div>{PROJECTS.map((project,index)=>(
            <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <img className="mx-3" src={project.image} width={300} alt={project.title} style={{borderRadius: '10%',objectFit: 'cover' }}/>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h5 className="my-3 mx-5 font-bold">{project.title}</h5>
                    <p className="my-3 mx-5">{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span key={index}
                        className="mx-4 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                    ))}
                </div>
            </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default Projects
