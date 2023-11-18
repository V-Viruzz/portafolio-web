import { useState } from "react"

function NavBarMobiel() {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className="justify-end flex md:hidden">
        <button
          className={`m-3 fixed ${showMenu ? 'hidden' : 'block'}`}
          onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M20.746 3.329a1 1 0 0 0-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 0 0 1.414 1.415l7.294-7.295 7.294 7.295a1 1 0 0 0 1.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 0 0 0-1.414Z"
            />
          </svg>
        </button>
      </div>

      <nav className={`justify-center md:hidden ${showMenu ? 'flex' : 'hidden'}`}>
        <ul
          className="w-full h-full bg-[#000000d5] fixed rounded-xl flex flex-col gap-10 items-center [&>li]:text-xl hover:[&>li]:text-[var(--color-text-1)] hover:[&>li]:transition-all"
        >
          <li className="flex justify-end w-full pt-3 pr-3">
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M20.746 3.329a1 1 0 0 0-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 0 0 1.414 1.415l7.294-7.295 7.294 7.295a1 1 0 0 0 1.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 0 0 0-1.414Z"
                />
              </svg>
            </button>
          </li>
          <li>Inicio</li>
          <li>Sobre mi</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </>
  )
}

export default NavBarMobiel