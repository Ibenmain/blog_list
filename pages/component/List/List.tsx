import React from 'react'
import Image from 'next/image'
import add from '@/public/add.svg'
import remove from '@/public/remove.svg'


const List = (props: {setTitle: Function , setOpen: Function, open: boolean }) => {
    const list = [
        { index: 1, name: "footBall" },
        { index: 2, name: "basketBall" },
        { index: 3, name: "vollyeBall" },
    ]

    const handleClick = (name: string) => {
        props.setOpen(!props.open);
        props.setTitle(name);
    }

    return (
        <div className='w-3/4 flex justify-center items-center flex-col'>
            <button className=' p-10 font-bold text-2xl flex flex-row items-center space-x-2'> <Image src={add} alt='icon not found' /> <h1>Add new Blog</h1></button>
            <div className='overflow-auto w-full'>
                {
                    list.map((item) => (
                        <div key={item.index} className=' p-2 font-bold text-md '>
                            <div className='flex flex-row justify-between'>
                                <div>
                                    {item.index}-<button onClick={() => handleClick(item.name)} >{item.name}</button>
                                </div>
                                <button>
                                    <Image src={remove} alt='icon not found' />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default List