// src/components/modal.tsx
import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Character } from '../pages/people';
import { useDateFormatter } from '../hooks/useDateFormatter';

interface Props {
    data?: Character | null;
    show: boolean;
    onHide: () => void;
}

const CharacterModal: React.FC<Props> = ({ data, show, onHide }: Props) => {
    const { formatDate } = useDateFormatter();
    const height = data?.height ? parseInt(data.height) / 100 + "m" : "n/a";
    const mass = data?.mass && data?.mass !== 'unknown' ? data.mass + "kg" : "n/a";
    const films = data?.films ? data.films.length : 0;
    const appearances = films > 1 ? "films" : "film";

    return (
        <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop={true}>
            <Modal.Header closeButton onClick={onHide}>
                <Modal.Title id="contained-modal-title-vcenter">{data?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Created on: {formatDate(data?.created)}</p>
                <p>Appeared in {films} {appearances}</p>
                <p>Birth Year: {data?.birth_year}</p>
            </Modal.Body>
            <Modal.Footer>
                <button className="" onClick={onHide}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default CharacterModal;
