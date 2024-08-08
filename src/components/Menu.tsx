import React, { useState, useEffect, useRef } from "react";

import DarkModeToggle from "./DarkMode/DarkModeToggle";
import { Link, useLocation, useNavigate } from "react-router-dom";

type MenuProps = {
    search?: boolean;
    setOverlayVisible?: (visible: boolean) => void;
    onChange?: (searchQuery: string) => void;
}

// type RequiredMenuProps = MenuProps & ({ search: true } extends { search: true } ? {
//     setOverlayVisible: (visible: boolean) => void;
//     onChange: (searchQuery: string) => void;
//   } : Record<never, never>);
  


const Menu: React.FC<MenuProps> = ({ search, setOverlayVisible, onChange }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchBar = useRef<HTMLInputElement>(null)
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            // Check if the key pressed is the desired key, in this case, the 'CTRL + K' key
            if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                searchBar.current?.focus();
                if (setOverlayVisible) {
                    setOverlayVisible(true);
                }
            }
        };

        const handleClick = (event: MouseEvent) => {
            if (searchBar.current && searchBar.current.contains(event.target as Node)) {
                if (setOverlayVisible) {
                    setOverlayVisible(true);
                }
            } else {
                if (setOverlayVisible) {
                    setOverlayVisible(false);
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleClick);
        };
    }, [setOverlayVisible]);

    useEffect(() => {
        // This effect captures the searchQuery state whenever it changes
        if (typeof onChange === 'function') {
            onChange(searchQuery);
        }
    }, [searchQuery, onChange])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            // Check if the user is on a character info page
            if (location.pathname.startsWith('/people')) {
                // User is on a character info page, perform search and navigate to the characters list
                setSearchQuery((event.target as HTMLInputElement).value);
                console.log(searchQuery)
                if (onChange && typeof onChange === 'function') {
                    onChange(searchQuery);
                }
                // Update the URL query parameter
                if (searchQuery !== '') {
                    const params = new URLSearchParams(location.search);
                    params.set('search', searchQuery);
                    navigate(`/people?${params.toString()}`); // Navigate with the updated query string
                } else {
                    navigate('/people')
                }
            }
        }
    }

    const mode = localStorage.getItem('darkMode') === 'true' ? 'dark' : 'light'

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-relative z-3" data-bs-theme={mode}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Home
                    </Link>
                    <DarkModeToggle />
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-list"><i className="bi bi-list"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" data-bs-theme={mode}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/people">
                                    Characters
                                </Link>
                            </li>
                        </ul>
                        {search && <form className="d-flex" role="search">
                            <input
                                type="search"
                                ref={searchBar}
                                onChange={handleInputChange}
                                onKeyDown={handleOnEnter}
                                id="searchbar"
                                className="form-control me-2"
                                placeholder="Search. CTRL + K"
                                aria-label="Search"
                            />
                        </form>}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;
