import { useState } from 'react'
import { navLinks } from '../constants/index.js'
const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li className='nav-li' key={id}>
                    <a href={href} className="nav-li_a" onClick={() =>{}}>{name}</a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {

    const handleToggle = () => {
        
        setIsOpen(prevState => !prevState)
    }
    const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="#home" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Ramatjyot Singh</a>
                <button className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex ' aria-label='Toggle menu' onClick = {handleToggle}>
                    <img className="w-6 h-6" src={isOpen ? "assets/close.svg":"assets/menu.svg"} alt="toggle" />
                </button>
                <nav className="sm:flex hidden">
                    <NavItems/>
                </nav>
                
            </div>
        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className="p-5">
                <NavItems/>
            </nav>
        </div>
    </header>
  )
}

export default Navbar