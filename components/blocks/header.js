import React from 'react'
import Nav from './Nav'
import { Logo } from '@/components/atoms/Icons'
import Container from '../ui/container'

function Header() {
      return (
            <Container>
                  <header className='w-full h-auto pt-5 flex fixed justify-between items-center'>
                        <div className='w-28 z-1 text-white'>
                              {/* [ ] verificar se este text-color está certo em relação ao logo*/}
                              <Logo />
                        </div>
                        <Nav />
                  </header>
            </Container>
      )
}

export default Header
