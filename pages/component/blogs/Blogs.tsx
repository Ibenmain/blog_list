import React, { useState } from 'react'
import List from '../List/List'
import Description from '../detail/Description'


const Blogs = () => {

  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  return (
    <main className=' h-full  flex justify-center items-center p-5'>
      <div className='bg-red-50 w-1/2 h-full flex flex-col items-center rounded-xl '>
        <h1 className=' p-10 font-bold text-5xl'>Blog List</h1>
        <div className='w-full flex justify-center'><div className='border w-2/3'></div></div>
        {open ? <Description title={title} open={open} setOpen={setOpen}/> :  <List setTitle={setTitle} open={open} setOpen={setOpen}/>}
      </div>
    </main>
  )
}

export default Blogs