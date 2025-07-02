import { useState, useEffect } from 'react'
import './navbar.css'

export function Navbar() {
    const [nav, setNav] = useState('');

    useEffect(()=> {
        console.log('Ativou o efeito colateral!');
    })

    return (
        <nav>
            Isto é um Navbar!
        </nav>
    )
}

export function SubNavbar() {
    return (
        <nav className='subnav'>
            Isto é um SubNavbar
        </nav>
    )
}