import React, { useState } from 'react'
import Image from 'next/image'
import add from '@/public/add.svg'
import remove from '@/public/remove.svg'
import Modal from '../modal/Modal'


const List = (props: {setTitle: Function , setOpen: Function, open: boolean }) => {
    const [isopen, setIsopen] = useState(false);
    const list = [
        { index: 1, name: "footBall" },
        { index: 2, name: "basketBall" },
        { index: 3, name: "vollyeBall" },
    ]
    const str = "The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants";

    const handleClick = (name: string) => {
        props.setOpen(!props.open);
        props.setTitle(name);
    }

    return (
        <div className='w-3/4 flex justify-center items-center flex-col overflow-auto '>
            <button onClick={() => setIsopen(!isopen)} className=' p-10 font-bold text-2xl flex flex-row items-center space-x-2'> <Image src={add} alt='icon not found' /> <h1>Add new Blog</h1></button>
            <div className=' w-full overflow-auto'>
                {
                    list.map((item) => (
                        <div key={item.index} className=' p-2  '>
                            <div className='flex flex-row justify-between '>
                                <div className='font-bold text-lg'>
                                    {item.index}-<button onClick={() => handleClick(item.name)} >{item.name}</button>
                                    <p className='pl-4 font-normal text-md'> {str.slice(1, 100) + "..."}  </p>
                                </div>
                                <button>
                                    <Image className='w-6 h-6 ' src={remove} alt='icon not found' />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Modal isopen={isopen} setIsopen={setIsopen}/>
        </div>
    )
}

export default List