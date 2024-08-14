import React, { useRef, useEffect } from 'react';

function AutoFocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h2>Auto Focus Input (useRef)</h2>
            <input ref={inputRef} type="text" placeholder="I will be focused on load" />
        </div>
    );
}

export default AutoFocusInput;
