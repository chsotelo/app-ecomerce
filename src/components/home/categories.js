import { ReactComponent as HeadphonesSVG } from './../../icons/categories/headphones.svg'
import { ReactComponent as SpeakerSVG } from './../../icons/categories/speaker.svg'
import { ReactComponent as IpodSVG } from './../../icons/categories/ipod.svg'
import { ReactComponent as LaptopSVG } from './../../icons/categories/laptop.svg'
import { ReactComponent as ControllerSVG } from './../../icons/categories/dj.svg'
import { ReactComponent as CellPhoneSVG } from './../../icons/categories/cellPhone.svg'
import { ReactComponent as LightingSVG } from './../../icons/categories/lighting.svg'

const listCategories = [
  {
    id: 'headphones',
    icon: <HeadphonesSVG />,
    color: '#F2C94C',
    title: 'Auriculares',
    link: 'headphones'
  }, {
    id: 'speakers',
    icon: <SpeakerSVG />,
    color: '#2D9CDB',
    title: 'Altavoces',
    link: 'speakers'
  }, {
    id: 'redroductors',
    icon: <IpodSVG />,
    color: '#9B51E0',
    title: 'Reproductores',
    link: 'reproductors'
  }, {
    id: 'laptops',
    icon: <LaptopSVG />,
    color: '#7be051',
    title: 'Laptops',
    link: 'laptops'
  }, {
    id: 'controllers',
    icon: <ControllerSVG />,
    color: '#e05151',
    title: 'Controladores',
    link: 'controllers'
  }, {
    id: 'smarthphones',
    icon: <CellPhoneSVG />,
    color: '#51b9e0',
    title: 'Smarthphones',
    link: 'smarthphones'
  }, {
    id: 'professional',
    icon: <LightingSVG />,
    color: '#515ce0',
    title: 'Profesional',
    link: 'professional'
  },
]

export default listCategories
