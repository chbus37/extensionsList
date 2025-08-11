import React from 'react'
import ButtonsList from './ButtonsList'

const Filters = ({ filter, setFilter }) => {

    const handleFilter = (e) => {
        setFilter(e.target.textContent)
    }
    return (
        <div className='mb-6 md:flex md:items-center md:justify-between'>
            <h2 className='dark:text-Neutral-0 text-center text-[34px] font-bold mb-6 md:mb-0'>Extensions List</h2>
            <div className='flex justify-between md:gap-4'>
                <ButtonsList active={filter === 'All'} handleClick={handleFilter} text="All" />
                <ButtonsList active={filter === 'Active'} handleClick={handleFilter} text="Active" />
                <ButtonsList active={filter === 'Inactive'} handleClick={handleFilter} text="Inactive" />
            </div>
        </div>
    )
}

export default Filters
