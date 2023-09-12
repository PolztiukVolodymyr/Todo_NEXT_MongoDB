import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-emerald-900 px-8 py-3 rounded'>
            <Link
                href='/'
                className='text-white font-bold hover:scale-110 ease-in duration-200 hover:text-green-100'
            >
                List of ...
            </Link>
            <Link
                href='/addTodo'
                className='bg-white p-2 rounded text-emerald-800
                text-base hover:scale-105 ease-in duration-200 hover:bg-green-100'
            >
                Add note
            </Link>
        </nav>
    );
};

export default Navbar;
