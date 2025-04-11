import React from 'react'
import { motion } from "framer-motion";

const TechStack = () => {
    const techStack = {
        "Frontend Development": [
            "HTML", "CSS", "Bootstrap", "JavaScript", "Angular", "React", "Next.js", "TypeScript"
        ],
        "Backend Development": [
            "Node.js", "Express.js", "FastAPI"
        ],
        "Databases": [
            "MySQL", "MongoDB", "MSSQL"
        ],
        "ORMs/ODMs": [
            "Sequelize", "Mongoose", "Sequelize-TypeScript"
        ],
        "Programming Languages": [
            "JavaScript", "TypeScript", "Python"
        ],
        "API Development": [
            "RESTful APIs", "JWT Authentication", "Role-Based Access Control"
        ],
        "Version Control": [
            "Git", "GitHub"
        ],
        "Tools & Platforms": [
            "VS Code", "Postman", "Docker", "npm", "yarn"
        ],
        "Other Skills": [
            "Responsive Web Design", "Scalable Architecture", "Problem Solving"
        ]
    };

    return (

        <>
            {/* Tech Stack */}
            <section className="mb-20">
                <h2 className="text-2xl font-semibold mb-6">Tech I Work With</h2>
                {Object.entries(techStack).map(([category, items]) => (
                    <div key={category} className="mb-6">
                        <h3 className="text-lg font-medium mb-2">{category}</h3>
                        <div className="flex flex-wrap gap-4">
                            {items.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

        </>
    )
}

export default TechStack;