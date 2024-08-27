import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button.jsx'
const Header = () => {
  return (
    <div>
        <Image src={'/logofile-removebg-preview.svg'} width={150} height={100} />
        <Button>Get Started</Button>
    </div>
  )
}

export default Header