import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h2>Theme Switcher (useContext)</h2>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ThemeSwitcher;
