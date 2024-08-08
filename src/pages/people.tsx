/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Characters page showing the list of characters with filtering and search features.
 * This is a public route.
 *
 * When accessed as an Autheticated user, visitors gets added functionality:
 * - Saving characters they want to try.
 * - Adding characters to their list of favorite.
 * - Adding characters to a list of completed characters.
 */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // dynamic Tab Name
import Menu from '../components/Menu';

// filtering related components
import CharactersList from '../components/CharactersList';

// pagination hook
import { usePaginate } from '../hooks/usePaginate';
import ScrollProgress from '../components/ScrollProgress';

export type Character = {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    homeworld: string;
    films: Film[];
    created: string;
    url: string;
};

export type Film = {
    id: number;
    url: string;
};

export type Specie = {
    id: number;
    name: string | null;
    classification: string | null;
    designation: string | null;
    average_height: string | null;
    skin_colors?: string | 'none';
    hair_colors?: string | 'none';
    eye_colors?: string | 'none';
    average_lifespan: string | null;
    language: string | null;
    homeworld: string | null;
    url: string;
};

export type Vehicle = {
    id: number;
    name?: string | null;
    model?: string | null;
    manufacturer: string;
    vehicle_class?: string | null;
    length?: string | null;
};

export type Starship = {
    id: number;
    url: string;
    name: string;
    model: string;
    manufacturer: string;
    vehicle_class?: string | null;
    length?: string | null;
};

const Characters = () => {
    // ------------------ STATE
    const [characters, setCharacters] = useState<Character[]>([]);
    const [count, setCount] = useState<number>(0); // number of fetched characters
    useParams<{ characterId: string; }>(); // star wars character id from URL
    const [isFetching, setIsFetching] = useState(false);
    const { currentPage } = usePaginate(); // pagination hook vars

    // ------------------ END STATE VARS

    // refreshing Characters when search field is modified or page from paginator changes.
    useEffect(() => {
        if (!isFetching) {
            fetchCharacters();
        }
    }, [currentPage]);


    // Data Fetching
    const fetchCharacters = async () => {
        setIsFetching(true);
        const url = `https://swapi.dev/api/people/?page=${currentPage}`;
        const options = {
            method: 'GET',
        };

        try {
            const response = await fetch(url, options);
            const fetchedCharacters = await response.json();
            // fetchedCharacters.next = next pagination url;
            // fetchedCharacters.previous = previous pagination url;
            console.log(fetchedCharacters);
            setCharacters(fetchedCharacters.results);
            setCount(fetchedCharacters.count);

            // console.dir(fetchedCharacters);
            setIsFetching(false);
        } catch (error) {
            console.error(error);
            setIsFetching(false);
        }
    };


    return (
        <div className="App h-100">
            <Helmet>
                <meta charSet="utf-8"></meta>
                <title>People - Star Wars Heroes</title>
            </Helmet>
            <Menu />
            <ScrollProgress />
            <div className="containr">
                <div className="content_wrapper">
                    <h1 className="welcome content mt-3rem p-3">Welcome to Star Heroes!</h1>
                    <div className="content p-3">
                        <CharactersList characters={characters} isFetching={isFetching} count={count} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Characters;
