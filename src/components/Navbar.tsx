
import { FaHome } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { MdContacts } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className='fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#1B2A4A]/90 backdrop-blur px-6 py-3 gap-12 shadow-lg rounded-full border border-white/10'>
        <ul className='flex gap-6 text-[#C9A87C] text-2xl'>
            <li><a href="#home"><FaHome /></a></li>
            <li><a href="#skills"><GiSkills /></a></li>
            <li><a href="#contact-me"><MdContacts /></a></li>
        </ul>
    </nav>
  )
}

export default Navbar