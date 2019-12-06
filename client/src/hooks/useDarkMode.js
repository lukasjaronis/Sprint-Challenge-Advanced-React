import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("dark", false);

    useEffect( () => {
        const appBody = window.document.body;
        darkMode ? appBody.classList.add("dark-mode") : appBody.classList.remove('dark-mode');
    }, [darkMode]);
    return  [darkMode, setDarkMode]
}

export default useDarkMode;