import profile from '../assets/image/close-up-nice-friendly-nice-young-woman-glasses-stands-calm.jpg'

const Header = () => {
    return (
        <header  className='flex justify-between items-center p-4 mx-auto border-b-2 max-w-7xl'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='w-[50px] h-[50px] rounded-full ' src={profile} alt="Profile" />
        </header>
    );
};

export default Header;