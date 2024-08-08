import { useState, useEffect } from "react"
import MenuIcon from "./Icons/MenuIcon"
import CloseIcon from "./Icons/CloseIcon"

const MIN_WIDTH = '768px';
const HIDDEN = 'hidden';
const AUTO = 'auto';


function NavBarMobiel() {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    let body = document.getElementById('page')
    if (body !== null) {
      body.style.overflow = showMenu ? HIDDEN : AUTO;
    }

  }, [showMenu])

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia(`(min-width: ${MIN_WIDTH})`).matches) {
        setShowMenu(false)
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className="justify-end flex md:hidden">
        <button
          className={`m-3 fixed ${showMenu ? 'hidden' : 'block'}`}
          onClick={handleClick}>
          <MenuIcon width={45} height={45} />
        </button>
      </div>

      <nav className={`justify-center md:hidden ease-out transition-opacity duration-100 ${showMenu ? ' opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none invisible'}`}>
        <ul
          className='dark:bg-[#000000d5] dark:backdrop-blur-0 bg-[#efefefd5] backdrop-blur-sm duration-500 w-full h-full fixed rounded-xl flex flex-col gap-10 items-center [&>li]:text-xl hover:[&>li]:text-[var(--color-text-1)] hover:[&>li]:transition-colors [&>li>a]:px-6 [&>li>a]:py-3'
        >
          <li className="flex justify-end w-full pt-3 pr-3">
            <button onClick={handleClick}>
              <CloseIcon width={42} height={42} />
            </button>
          </li>
          <li><a href="#home" onClick={handleClick}>Inicio</a></li>
          <li><a href="#about-me" onClick={handleClick}>Sobre mi</a></li>
          <li><a href="#proyects" onClick={handleClick}>Proyectos</a></li>
          <li><a href="#abilities" onClick={handleClick}>Habilidades</a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBarMobiel