import { BsFillCloudFill } from 'react-icons/bs';
import { IoIosSunny } from 'react-icons/io';
import { FaCloudRain, FaSnowflake } from 'react-icons/fa';
import { RiFoggyFill } from 'react-icons/ri';

const icons = [
  {
    type: 'Cloudy',
    icon: <BsFillCloudFill size='48px' color='lightblue'/>
  },
  {
    type: 'Sunny',
    icon: <IoIosSunny size='48px' color='orange'/>
  },
  {
    type: 'Rain',
    icon: <FaCloudRain  size='48px' color='royalblue'/>
  },
  {
    type: 'Snow',
    icon: <FaSnowflake size='48px' color='#fafafa'/>,
  },
  {
    type: 'Fog',
    icon: <RiFoggyFill size='48px' color='lightgray'/>
  },

]