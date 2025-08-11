import Card from './Card'
import data from '../../data.json';
import { useState } from 'react';

const CardContainer = ({ filter }) => {

    const [extensions, setExtensions] = useState(data)

    let filteredExtensions = [];

    if (filter === 'Inactive') {
        filteredExtensions = extensions.filter((extension) => !extension.isActive);
    } else if (filter === 'Active') {
        filteredExtensions = extensions.filter((extension) => extension.isActive);
    } else {
        filteredExtensions = extensions;
    }


    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-3'>
            {
                filteredExtensions.map(extension => {
                    return <Card key={extension.name} {...extension} extensions={extensions} setExtensions={setExtensions} />
                })
            }
        </div>
    )
}

export default CardContainer
