import { useEffect } from "react";

const useOutsideClick = (ref, callback, isVisible) => {
    const handleClick = e => {
        if(ref.current && !ref.current.contains(e.target)){
            callback();
        }
    }
    useEffect(() => {
        if(isVisible) {
            document.addEventListener('click', handleClick);
        }
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [isVisible]);
};

export default useOutsideClick;