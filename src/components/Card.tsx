import ReactIcon from './Icons/ReactIcon'
import TailwindIcon from './Icons/TailwindIcon'
import ArrowIcon from './Icons/ArrowIcon'
import NodejsIcon from './Icons/NodejsIcon'
import MongodbIcon from './Icons/MongodbIcon'
import TypescriptIcon from './Icons/TypescriptIcon'
import NextjsIcon from './Icons/NextjsIcon'
import { myProyect } from '../static'
import { useState } from 'react'
import GithubIcon from './Icons/GithubIcon.tsx'
import ExternalLinkIcon from './Icons/ExternalLinkIcon.tsx'

function Card() {
  const [select, setSelect] = useState(0)
  const { urlPage, urlRepository, urlImage, name, description, webTools, id } = myProyect[select]

  const toolIcons = {
    react: ReactIcon,
    tailwind: TailwindIcon,
    nodejs: NodejsIcon,
    mongodb: MongodbIcon,
    typescript: TypescriptIcon,
    nextjs: NextjsIcon,
  }

  const navigatePrevious = () => {
    if (select > 0) {
      setSelect(select - 1)
    }
  }

  const navigateNext = () => {
    if (select < myProyect.length - 1) {
      setSelect(select + 1)
    }
  }

  return (
    <div className='CardBorder w-full h-[42rem] md:h-[44rem] box-border p-[15px] rounded-3xl'>
      <div className='Card w-full h-full rounded-2xl bg-[#1f1f1f] grid md:grid-rows-[3.5fr_2fr_1fr] sm:grid-rows-[4fr_2fr_1fr] grid-rows-[3fr_2fr_0.5fr_1fr] md:px-16 sm:px-11 px-7'>

        <div
          className='TransitionImage w-full box-border grid place-content-center'
          key={urlImage}
          >
          <div className='relative group'>
            <img
              className='rounded-3xl md:w-full md:h-full md:object-cover'
              src={urlImage}
              alt={`${name} preview`}
            />
            <div className='bg-black rounded-3xl w-full h-full absolute top-0 opacity-0 group-hover:opacity-50 transition-opacity'>
            </div>
            <div className='text-white w-full h-full absolute top-0 justify-center items-center gap-5 flex opacity-0 group-hover:opacity-100 transition-opacity '>
              <a href={urlRepository} aria-label="Ver repositorio en GitHub">
                <GithubIcon width={60} height={60} />
              </a>
              <a href={urlPage} aria-label="Abrir enlace externo">
                <ExternalLinkIcon width={60} height={60} />
              </a>
            </div>
          </div>
        </div>

        <div className='TransitionOpacity' key={id}>
          <div className='grid sm:grid-cols-[2fr_1fr]' >
            <div>
              <h3 className='text-2xl md:text-3xl font-bold'>
                {name}
              </h3>
              <p className='dark:text-[#999999] text-[#787878] text-md md:text-lg font-semibold w-[90%] my-3'>
                {description}
              </p>
            </div>
            <div className='font-bold text-8xl sm:flex  hidden justify-end'>
              <span className="text-transparent titleEffect font-extrabold text-8xl lg:text-9xl">
                {id}
              </span>
            </div>
          </div>
          <div
            className='
              flex gap-4 mt-4 flex-wrap
              [&>div]:relative [&>div>span]:absolute [&>div>span]:left-1/2 [&>div>span]:-translate-x-1/2
              [&>div>span]:opacity-0 dark:[&>div>span]:bg-neutral-900 [&>div>span]:bg-neutral-300 [&>div>span]:px-2 [&>div>span]:py-[1px]
              md:[&>div>span]:top-14 [&>div>span]:top-12 [&>div>span]:rounded-lg [&>div>span]:z-20 text-xl'
          >
            {
              webTools.map((tool) => {
                const name = tool.charAt(0).toUpperCase() + tool.slice(1)
                if (tool in toolIcons) {
                  const IconComponent = toolIcons[tool as keyof typeof toolIcons]
                  return (
                    <div className="group" key={tool}>
                      <IconComponent className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]' />
                      <span className="group-hover:opacity-100">{name}</span>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        <div className='font-bold text-8xl flex sm:hidden justify-center items-center'>
          <span className="dark:text-transparent text-[#6b6b6b] titleEffect font-extrabold text-7xl">
            {id}
          </span>
        </div>
        <div className='flex justify-center items-center gap-2 text-neutral-500 '>
          <button onClick={navigatePrevious}>
            <ArrowIcon className='dark:hover:text-white hover:text-black' width={40} height={40} />
          </button>
          <button onClick={navigateNext}>
            <ArrowIcon className='dark:hover:text-white hover:text-black' width={40} height={40} transform="scale(-1 1)" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Card

// text-wrap