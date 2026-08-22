import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../lib/Motion";
import { projects } from "../data/Projects";

function Projects() {
    return (
        <div id="projects" className="bg-gray-950 grid grid-cols-1 content-center px-5 lg:px-20 py-20">

            <div className="flex justify-between items-start flex-col lg:flex-row">
                <div className="flex flex-col">
                    <div className="flex h-10 items-center">
                        <span className="h-px w-5 bg-blue-300 me-1"></span>
                        <p className="text-gray-500 text-sm font-bold tracking-wider">PORTOFOLIO</p>
                    </div>
                    <h2 className="text-white text-4xl font-serif">
                        Proyek yang pernah
                    </h2>
                    <h2 className="text-blue-300 text-4xl font-serif italic">
                        saya kerjakan
                    </h2>
                </div>
                <p className="text-gray-600 text-xs font-mono text-left lg:text-right mt-6 lg:mt-2">
                    // Merupakan proyek akademik & personal.
                    <br />
                    Detail lebih lanjut dapat didiskusikan
                    <br />
                    secara langsung.
                </p>
            </div>

            <motion.div {...staggerContainer} className="flex flex-col border border-gray-800 rounded-lg mt-10">
                {projects.map((project, index) => (
                    <motion.div {...staggerItem}
                        key={project.number}
                        className={`flex flex-col lg:flex-row gap-4 lg:gap-10 px-6 py-6 ${
                            index !== projects.length - 1 ? 'border-b border-gray-800' : ''
                        }`}
                    >
                        <span className="text-gray-600 text-sm font-mono shrink-0">{project.number}</span>

                        <motion.div {...staggerItem} className="flex flex-col flex-1">
                            <p className="text-blue-300 text-xs font-bold tracking-wider">{project.category}</p>
                            <h3 className="text-white text-lg font-serif mt-1">{project.title}</h3>
                            <p className="text-gray-500 text-sm mt-2 leading-relaxed">{project.description}</p>
                            <motion.div {...staggerItem} className="flex flex-wrap gap-2 mt-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-blue-950/30 ring-1 ring-blue-900 text-blue-300 text-xs font-mono rounded-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>

                        <span className="text-gray-600 text-xs font-mono shrink-0">{project.year}</span>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}

export default Projects