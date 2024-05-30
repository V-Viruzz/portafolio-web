import urlImageNintendoSwitch from './assets/images/nintendo-switch-ui.webp'
import urlImageCotillon from './assets/images/cotillon.webp' 
import urlImageLuxer from './assets/images/luxer.webp' 
import urlImageCollectionx from './assets/images/collectionx.webp'
import urlImageZimg from './assets/images/zimg.webp' 
import urlImagePomotimerx from './assets/images/pomotimerx.webp' 

const WEBTOOLS = {
  REACT: 'react',
  TAILWIND: 'tailwind',
  TYPESCRIPT: 'typescript',
  GIT: 'git',
  NEXTJS: 'nextjs',
  MONGODB: 'mongodb',
  NODEJS: 'nodejs',
}

export const myProyect = [
  {
    id: '01',
    urlImage: urlImageNintendoSwitch.src,
    urlRepository: 'https://github.com/Viruzzz0/ui-nintendo-switch',
    urlPage: 'https://ui-nintendo-switch.vercel.app/',
    name: 'Nintendo Switch UI',
    description: 'Inteface de nintendo switch usando tecnologia web',
    webTools: [WEBTOOLS.REACT, WEBTOOLS.TAILWIND]
  },
  {
    id: '02',
    urlImage: urlImageCotillon.src,
    urlRepository: 'https://github.com/Viruzzz0/cotillon',
    urlPage: 'https://cotillonsinka.vercel.app',
    name: 'Cotillon',
    description: 'Sitio web dedicado a productos de cotillón para celebraciones',
    webTools: [WEBTOOLS.TYPESCRIPT, WEBTOOLS.NEXTJS, WEBTOOLS.TAILWIND,]
  },
  {
    id: '03',
    urlImage: urlImageLuxer.src,
    urlRepository: 'https://github.com/Viruzzz0/blog-client',
    urlPage: 'https://luxer.netlify.app',
    name: 'Luxer X',
    description: 'Pequeña red social con usuarios y mensajes privados',
    webTools: [WEBTOOLS.REACT, WEBTOOLS.NODEJS, WEBTOOLS.TYPESCRIPT, WEBTOOLS.MONGODB, WEBTOOLS.TAILWIND]
  },
  {
    id: '04',
    urlImage: urlImageCollectionx.src,
    urlRepository: 'https://github.com/Viruzzz0/collections-x',
    urlPage: 'https://collectionsx.netlify.app',
    name: 'Collection X',
    description: 'App donde puedes guardar todos tus enlaces y ordenarlos',
    webTools: [WEBTOOLS.REACT, WEBTOOLS.NODEJS, WEBTOOLS.MONGODB]
  },
  {
    id: '05',
    urlImage: urlImageZimg.src,
    urlRepository: 'https://github.com/Viruzzz0/zimg',
    urlPage: 'https://zimg-x.vercel.app',
    name: 'Zimg',
    description: 'Cambiar la resolución y formato, todo en el mismo sitio',
    webTools: [WEBTOOLS.REACT, WEBTOOLS.NODEJS, WEBTOOLS.MONGODB]
  },
  {
    id: '06',
    urlImage: urlImagePomotimerx.src,
    urlRepository: 'https://github.com/Viruzzz0/pomodoro',
    urlPage: 'https://pomotimerx.netlify.app',
    name: 'Pomotimer X',
    description: 'Pomodoro, temporizador y chronometro, todo junto',
    webTools: [WEBTOOLS.REACT]
  },
]