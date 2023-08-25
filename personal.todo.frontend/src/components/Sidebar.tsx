import { selectSideBar } from "../reducers/sidebarToggleSlice";
import { selectSidebarWidth } from "../reducers/sidebarWidthSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import "../styles/Sidebar.css";
import { toggleSidebarResized } from "../reducers/sidebarToggleResizedSlice";
import useResizeSidebar from "../hooks/useResizeSidebar";
import Links from "./Sidebar/Links";
import Projects from "./Sidebar/Projects";

export default function Sidebar() {

    useResizeSidebar();

    const dispatch = useAppDispatch();
    const sidebarWidth = useAppSelector(selectSidebarWidth);
    const isOpen = useAppSelector(selectSideBar);

    const handleMouseDown = () => {
        dispatch(toggleSidebarResized({ isResized: true }));
    };
    


    return (
        <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-close"}`}>
            <div
                className={"app-sidebar"}
                style={{ width: sidebarWidth }}
                onMouseDown={(e) => e.preventDefault()}
            >
                <div className={"app-sidebar-content"}>
                    <div className={"menu-items"}>
                        <Links />
                        <Projects />
                    </div>
                </div>
                <div className={"app-sidebar-resizer"} onMouseDown={handleMouseDown} />
            </div>
            <div className="app-frame" />
        </div>
    );
}
