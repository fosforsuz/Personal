import { BsSun } from "react-icons/bs";
import { MdOutlineNotificationImportant, MdOutlineUpcoming } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Links() {
    return (
        <>
            <NavLink to="/today" className={"menu-item"}>
                <BsSun className="icon" />
                <span className="item-title">Today</span>
            </NavLink>
            <NavLink to="/important" className={"menu-item"}>
                <MdOutlineNotificationImportant className="icon" />
                <span className="item-title">Important</span>
            </NavLink>
            <NavLink to="/upcoming" className="menu-item">
                <MdOutlineUpcoming className="icon" />
                <span className="item-title">Upcoming</span>
            </NavLink></>
    )
}
