import { useState, useEffect } from "react";
import { db } from "./init-firebase";
import { doc, getDoc } from "firebase/firestore";
import ProjectImages from "./ProjectImages";

// Define TypeScript types for the data
interface Project {
    name: string;
    desc: string;
    img_id: string;
}

interface ProjectsData {
    Projects: Project[];
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const docRef = doc(db, "Main", "Projects");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data() as ProjectsData;
                    setProjects(data.Projects);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error getting document:", error);
                return <p>Error getting document</p>;
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <h2>Projects</h2>
            <div>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="ProjectCard"
                        onClick={(event) => console.log(event)} // Redirect to project page
                    >
                        <div className="ProjectCardContent">
                            <p key={`Name ${index}`}>{project.name}</p>
                            <p key={`Desc ${index}`}>{project.desc}</p>
                            <ProjectImages img_id={project.img_id} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;
