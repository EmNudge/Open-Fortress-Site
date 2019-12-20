import React from 'react'

// stolen and modified from https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
const useOutsideClick = (ref, onOutsideClick) => {
    const handleClick = e => {
        // if no ref or we clicked inside ref, exit early
        if (!ref.current || ref.current.contains(e.target)) return;
        onOutsideClick();
    }

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    });
}

export default useOutsideClick;