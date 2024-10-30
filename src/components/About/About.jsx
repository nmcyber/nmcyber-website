
import Accordian from './Accordian'
import { cyberlogo } from '@/assets'

const About = () => {
  return (
    <div>
        <div className='flex gap-x-6 w-full px-8 lg:px-16 xl:px-24  '>
            <div>
                <Accordian/>
            </div>
            <div className='flex justify-center items-center w-3/5 max-md:hidden'>
                <img src={cyberlogo} alt="cyberlogo" width={350} />
            </div>
        </div>
    </div>
  )
}

export default About