import Image from 'next/image'
import React from 'react'
import back from '@/public/back.svg'

const Description = (props: { title: string, open: boolean, setOpen: Function }) => {

  return (
    <div className='flex justify-center items-center flex-col overflow-auto'>
      <button onClick={() => (props.setOpen(!open))} className='p-10 font-bold text-2xl flex flex-row items-center space-x-2'><Image src={back} alt='' /> <h1>{props.title}</h1></button>
      <div className='overflow-auto'>
        <div className=''>

          <p className='p-16 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing eli. Donec suscipit purus quis condimentum vulputate. Suspendisse sodales a nisi non pellentesque. convallis enim euismod, consectetur orci ac, elementum lectus. Etiam et malesuada justo. Aliquam justo ante, sodales ut nulla in, faucibus euismod nisl. Nullam et nisi vel nulla aliquet sollicitudin.
            In consequat ligula vel dapibus eleifend. Pellentesque nibh sapien, laoreet vel augue eget, eleifend ultrices nunc. Praesent lorem leo, faucibus at nisi non, posuere auctor felis. Suspendisse potenti. Duis sed ex feugiat, bibendum metus id, ultricies augue. Nullam maximus vitae ligula eu interdum. Nullam ultrices, magna at efficitur tempus, nisi massa varius ex, vel facilisis sem libero id dolor.
            Suspendisse ultrices tincidunt aliquam. In sollicitudin posuere magna a scelerisque. Suspendisse elit sapien, tempus quis nunc quis, scelerisque egestas purus. Maecenas elementum nisi in eros gravida, in ullamcorper tellus convallis. Aenean dapibus ligula ullamcorper nisl faucibus, nec pulvinar odio pharetra. Cras vestibulum tellus ante, in tempor elit lobortis eu. Etiam mollis dui at orci tempor aliquet. Curabitur ut enim tortor. Donec eu vestibulum enim. Sed lacus enim, accumsan eu semper ut, interdum in eros. Mauris aliquam ex pellentesque, hendrerit sem ac, ullamcorper lacus. Sed pretium eleifend mi, sit amet malesuada elit scelerisque at. Aliquam erat volutpat.
            Duis posuere fermentum neque at luctus. Fusce malesuada consectetur tortor at imperdiet. Integer mollis laoreet ipsum ac gravida. Aliquam erat volutpat. Nunc tempor ac massa ut eleifend. Etiam id nisi vel libero dictum dignissim. Sed id eleifend lorem. Duis maximus lacus urna, nec hendrerit nulla laoreet ut. Sed aliquet risus et consequat iaculis. Phasellus sit amet leo nec justo bibendum tristique. Aliquam vulputate suscipit quam, quis sollicitudin leo dapibus ac. Mauris non felis sit amet velit tempus accumsan. Nunc et iaculis mauris, eu laoreet mi. Suspendisse et urna sed nulla hendrerit pharetra. Proin eleifend feugiat nisl, non elementum ipsum venenatis non. Phasellus augue nibh, placerat vitae tortor at, viverra viverra erat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description