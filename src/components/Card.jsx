import ButtonsList from '../components/ButtonsList.jsx'
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';

const Card = ({ logo, name, description, isActive, setExtensions, extensions }) => {

    const handleToggle = () => {

        const currentExtension = extensions.filter(extension => extension.name === name)[0];
        console.log(currentExtension);
        const updateExtension = { ...currentExtension, isActive: !currentExtension.isActive }
        console.log(updateExtension)

        const newExtensions = extensions.map(extension => {
            if (extension.name === name) {
                extension = updateExtension
            }

            return extension;
        })
        setExtensions(newExtensions)

    }

    const onRemove = () => {
        const filteredcExtensions = extensions.filter(extension => extension.name !== name)
        setExtensions(filteredcExtensions)
    }


    return (
        <div className="bg-Neutral-0 rounded-lg p-4 shadow-sm dark:bg-Neutral-800 ">
            <div className='flex gap-4 items-start mb-10'>
                <img src={logo} alt={name} />
                <div>
                    <h2 className='text-[20px] font-bold mb-2 text-Neutral-900 dark:text-Neutral-0'>{name}</h2>
                    <p className='text-Neutral-600 text-[15px] dark:text-Neutral-300'>{description}</p>
                </div>

            </div>
            <div className='flex items-center justify-between'>
                <ButtonsList handleClick={onRemove} textSmall text={"Remove"} />
                <Toggle onClick={handleToggle} color="red" checked={isActive} />
            </div>


        </div>
    )
}

export default Card
