import React, { useState } from 'react'
import Logo from '../../public/assets/images/Logo.svg';
import LogoDark from '../../public/assets/images/logo-dark.svg';
import SunIcon from '../../public/assets/images/icon-sun.svg';
import MoonIcon from '../../public/assets/images/icon-moon.svg';

const Header = () => {

    const savedTheme = localStorage.getItem('dark');
    if (JSON.parse(savedTheme)) {
        document.documentElement.classList.add('dark');
    }


    const [isDark, setIsDark] = useState();

    const handleClick = () => {
        const isDarkChanged = document.documentElement.classList.toggle('dark');
        setIsDark(isDarkChanged);
        localStorage.setItem('dark', isDarkChanged);
    }
    return (
        <div className='bg-Neutral-0 dark:bg-Neutral-800 flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center mb-6'>
            <img src={isDark ? LogoDark : Logo} alt="Logo Extensions" />
            <button onClick={handleClick} className='bg-Neutral-100 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-Neutral-200 dark:bg-Neutral-600 dark:hover:bg-Neutral-700'>
                <img src={isDark ? SunIcon : MoonIcon} alt="logo" />
            </button>
        </div>
    )
}

export default Header
