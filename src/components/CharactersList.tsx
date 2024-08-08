import React, { useRef, useState } from 'react'
import Card from './Card'
// import Filter from './Filter'
import CardsPlaceholder from './CardsPlaceholder'
import Pagination from './Paginate'

import { Character } from '../pages/people'
import { usePaginate } from '../hooks/usePaginate'
import CharacterModal from './Modal'

type CharactersListProps = {
    characters: Character[];
    count: number;
    isFetching: boolean;
  };

const CharactersList: React.FC<CharactersListProps> = ({ characters, isFetching, count }) => {
    // pagination
    const { currentPage } = usePaginate()
    const minRange = currentPage * 10 - 9;
    const maxRange = currentPage * 10 > count? count : currentPage * 10;

    // modal
    const [show, setShow] = useState<boolean>(false);
    const [characterInfo, setCharacterInfo] = useState<Character>();

    const loader = useRef(null);

    const fetchModalInfo = async (url: string) => {
        try {
            const response = await fetch(url);
            const cInfo = await response.json();
            console.log('Character Info', cInfo)
            setCharacterInfo(cInfo);
            handleShowModal();
        } catch (error) {
            console.error(error);
        }
    }

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    const extractIdFromUrl = (url: string):number => {
        const parts = url.split('/');
        const id = parts[parts.length - 2]; // The second to last element
        return parseInt(id, 10);
    };    


    return (
        <>
            <h3 className="w-100">List of Characters{/* sortingLabel[sorting] */}</h3>
            <h4 className="w-100">{minRange}-{maxRange} of {count} characters</h4>
            {!isFetching ? (
                <>
                    <div className="cards min-h-80">
                        {characters.map((character: Character) => (
                            <>
                                <Card onClick={() => fetchModalInfo(character.url)} key={`character_${extractIdFromUrl(character.url)}`} data={character} />
                                <CharacterModal data={characterInfo} show={show} onHide={() => handleCloseModal()}/>
                            </>
                        ))}
                    </div>
                    <div ref={loader} />
                    <Pagination count={count} />
                </>
            ) : (
                <CardsPlaceholder />
            )}
        </>
    )
}

export default CharactersList