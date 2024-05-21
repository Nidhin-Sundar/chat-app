import Image from 'next/image'
import React from 'react'

type Props = {
    size?: number;
}

const LoadingLogo = ({size=100}: Props) => {
  return (
    <div>
        <Image
        src="/logo.svg"
        alt='Logo'
        width={size}
        height={size}
        className='animate-pulse duration-800 ml-96 mt-96'
    />
    </div>
  )
}

export default LoadingLogo