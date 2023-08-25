import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import useProjects from "../../hooks/useProjects";
import { useAppSelector } from "../../store/hook";
import { selectCategory } from "../../reducers/categoryBaseSlice";
import { v4 } from "uuid";

export default function Projects() {

    useProjects();
    const [projectsOpen, setProjectsOpen] = useState<boolean>(false);
    const projects = useAppSelector(selectCategory);

    const handleDropDown = () => {
        setProjectsOpen(!projectsOpen);
    }

    const project = projects.map((project) => {
        return (
            <ul key={v4()}>
                <li style={{ backgroundColor: project.categoryColor ? project.categoryColor : "white" }}>{project.categoryName}</li>
            </ul>
        )
    })

    return (
        <div className="menu-item" onClick={handleDropDown}>
            {projectsOpen ? (< IoMdArrowDropup />) : (<IoMdArrowDropdown />)}
            <span className="item-title">Projects</span>
            {projectsOpen ? project : null}
        </div>)
}
