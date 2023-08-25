import { FC } from "react";
import { LayoutProps } from "../types/layout.interface";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";


const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout
