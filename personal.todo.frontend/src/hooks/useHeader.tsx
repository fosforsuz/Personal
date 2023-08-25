import { useEffect } from "react";


export default function useHeader() {

    useEffect(() => {
        if (!localStorage.getItem("isOpen")) {
            localStorage.setItem("isOpen", "true");
        }
    }, []);

}
