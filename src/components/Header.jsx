import logo from '../../src/assets/logo/hashtag.svg';
import UserBotton from './UserButton';
import { useLocation, Link} from 'react-router-dom';

const Header = () => {
    const {pathname} = useLocation().pathname;
    const completeHeader = (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between z-10'>
            <Link to="/">
            <img className='h-16 px-2' src={logo} alt="Logo do site" />
            </Link>
            <UserBotton />
        </header>
    );

    const simpleHeader = (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between z-10'>
            <Link to="/">
            <img className='h-16 px-2' src={logo} alt="Logo do site" />
            </Link>
        </header>
    );
    return(
        <>
            {pathname === "/" ? completeHeader : simpleHeader}
        </>
    );
};

export default Header;