import './Header.css'
import { welcome } from '../../constants/images'
import { SubHeading } from '../../components'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        officiis quae laboriosam, tempore eos sit.
      </p>
      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={welcome} alt='welcome' />
    </div>
  </div>
)

export default Header
