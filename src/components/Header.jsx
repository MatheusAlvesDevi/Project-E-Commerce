import logo from '../../src/assets/logo/hashtag.svg';
import UserBotton from './UserButton';

const Header = () => {
    return(
        <a href="/">
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between'>
            <img className='h-16 px-2' src={logo} alt="Logo do site" />
            <UserBotton />
        </header>
        </a>
    );
};

export default Header;