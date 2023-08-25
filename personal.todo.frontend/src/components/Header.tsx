import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai/";
import todoLogo from "../assets/todo-icon.svg";
import styles from "../styles/header.module.css";
import useHeader from "../hooks/useHeader";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { selectSideBar, toggleSidebar } from "../reducers/sidebarToggleSlice";

export default function Header() {

    useHeader();
    const dispatch = useAppDispatch();
    const openSidebar = useAppSelector(selectSideBar);

    const assignToggleSideBar = () => {
        const newIsOpen = !openSidebar;
        localStorage.setItem("isOpen", JSON.stringify(newIsOpen));
        dispatch(toggleSidebar({ open: newIsOpen }))
    };


    const icon = openSidebar ? (
        <AiOutlineMenuFold onClick={assignToggleSideBar} className={styles.icon} />
    ) : (
        <AiOutlineMenuUnfold onClick={assignToggleSideBar} className={styles.icon} />
    );

    return (
        <header className={styles.header}>
            <div className={styles["header-items"]}>
                <img src={todoLogo} alt="Todo Logo" className={styles.logo} />
                <p className={styles["logo-title"]}>ToDo</p>
                {icon}
            </div>
        </header>
    );
}
