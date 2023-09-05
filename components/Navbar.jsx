import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-emerald-900 px-8 py-3 rounded'>
            <Link href='/' className='text-white font-bold'>
                List of ...
            </Link>
            <Link
                href='/addTodo'
                className='bg-white p-2 rounded text-emerald-800 text-base'
            >
                Add todo
            </Link>
        </nav>
    );
};

export default Navbar;
