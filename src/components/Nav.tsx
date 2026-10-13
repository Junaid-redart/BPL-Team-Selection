import Logo from '../assets/logo.png'
import { AiFillDollarCircle } from 'react-icons/ai';
const Nav = ({coin}:{coin:number}) => {
  
    return (
       <nav className=" bg-red-200">
        <div className='flex justify-between items-center container mx-auto'>
      <img src={Logo} alt="" />

      <ul className='flex gap-4 items-center'>
        <li>Home</li>
        <li>fixture</li>
        <li>Players</li>
        <li>Schedule</li>
      </ul>
            <h2 className='font-bold text-3xl text-yellow-500 flex items-center gap-1'><AiFillDollarCircle/>

          {coin}
            </h2>
       </div>
    </nav>
    );
};

export default Nav;