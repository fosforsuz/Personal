import { useEffect } from "react";
import { selectSidebarToggleResized, toggleSidebarResized } from "../reducers/sidebarToggleResizedSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setSidebarWidth } from "../reducers/sidebarWidthSlice";


export default function useResizeSidebar() {
    const dispatch = useAppDispatch();
    const isResized = useAppSelector(selectSidebarToggleResized);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResized) {
                return;
            }
            let width = e.clientX + e.movementX / 2;
            if (width < 200) {
                width = 200;
            } else if (width > 468) {
                width = 468;
            }
            dispatch(setSidebarWidth({
                width: width,
            }));
            localStorage.setItem('sidebarWidth', width.toString()); // add this line to set the width in localStorage
        }

        const handleMouseUp = () => {
            dispatch(toggleSidebarResized({ isResized: false }));
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp);
        }

    }, [dispatch, isResized])
}
