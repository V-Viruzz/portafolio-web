import ReactIcon from './Icons/ReactIcon'
import TailwindIcon from './Icons/TailwindIcon'
import ArrowIcon from './Icons/ArrowIcon'
import NodejsIcon from './Icons/NodejsIcon'
import { myProyect } from '../static'
import { useState } from 'react'

function Card() {
  const [select, setSelect] = useState(0)
  const { urlImage, name, description, webTools, id } = myProyect[select]

  const toolIcons = {
    react: ReactIcon,
    tailwind: TailwindIcon,
    nodejs: NodejsIcon
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
    <div className='CardBorder w-full h-[44rem] box-border p-[15px] rounded-3xl'>
      <div className='Card w-full h-full rounded-2xl bg-[#1f1f1f] grid grid-rows-[2fr_2fr_1fr] px-16'>

        <div className='py-12'>
          <img
            className='rounded-3xl'
            src={urlImage}
            alt="preview-web"
          />
        </div>

        <div>
          <div className='grid grid-cols-[2fr_1fr]'>
            <div>
              <h3 className='text-3xl font-bold'>
                {name}
              </h3>
              <p className='text-[#999999] text-lg font-semibold w-[90%] my-3'>
                {description}
              </p>
            </div>
            <div className='font-bold text-8xl flex justify-end'>
              <span className="text-transparent titleEffect font-extrabold text-7xl lg:text-9xl">
                {id}
              </span>
            </div>
          </div>
          <div className='flex gap-3 mt-4'>
            {
              webTools.map((tool) => {
                if (tool in toolIcons) {
                  const IconComponent = toolIcons[tool as keyof typeof toolIcons]
                  return <IconComponent width={50} height={50} key={tool} />
                }
              })
            }
          </div>
        </div>

        <div className='flex justify-center items-center gap-2 text-neutral-500'>
          <button onClick={navigatePrevious}>
            <ArrowIcon width={40} height={40} />
          </button>
          <button onClick={navigateNext}>
            <ArrowIcon width={40} height={40} transform="scale(-1 1)" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Card

// text-wrap