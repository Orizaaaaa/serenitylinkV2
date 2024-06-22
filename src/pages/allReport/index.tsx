import { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'


const AllReport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <DefaultLayout>
            <div className="relative inline-block text-left" ref={dropdownRef}>
                <div>
                    <button
                        id="dropdownButton"
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                    >
                        Options
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    id="dropdownMenu"
                    className={`${isOpen ? '' : 'hidden'} origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdownButton"
                >
                    <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                            Account settings
                        </a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                            Support
                        </a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                            License
                        </a>
                        <form method="POST" action="#" role="none">
                            <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem">
                                Sign out
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>

    )
}

export default AllReport