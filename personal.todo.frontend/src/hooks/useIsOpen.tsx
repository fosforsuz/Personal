
import { useState, useEffect } from 'react'

export default function useIsOpen() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const isOpenInLocalStorage = localStorage.getItem('isOpen');
        if (isOpenInLocalStorage) {
            setIsOpen(JSON.parse(isOpenInLocalStorage));
        }
    }, []);

    return isOpen;
}
