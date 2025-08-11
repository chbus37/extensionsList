

const ButtonsList = ({ text, textSmall, handleClick, active }) => {
    return (
        <button onClick={(e) => handleClick(e)} className={`border border-Neutral-300 px-5 py-2 rounded-full hover:bg-Neutral-600 cursor-pointer hover:text-Neutral-0 dark:text-Neutral-0 ${active ? 'dark:bg-red-400' : 'dark:bg-Neutral-600'}  dark:hover:bg-Red-400  ${textSmall ? 'text-base' : 'text-[1.25rem]'}`}>{text}</button>
    )
}

export default ButtonsList
