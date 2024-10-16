import { MouseEventHandler } from 'react'

type ImageWebProps = {
    src: string,
    alt: string | undefined,
    onClick : MouseEventHandler<HTMLElement> | undefined,
    title: string | undefined,
}

type toWebpProps = {
    imagePath: string,
    newExtension: 'webp'
}

function toWebpImage( {imagePath, newExtension }: toWebpProps ): string {
    // Split the imagePath by the last slash to separate the directory and file parts
    const lastSlashIndex = imagePath.lastIndexOf('/');
    const directory = imagePath.substring(0, lastSlashIndex + 1); // Include the trailing slash
    const fileWithExtension = imagePath.substring(lastSlashIndex + 1);

    // Split the fileWithExtension by the last dot to separate the name and extension
    const parts = fileWithExtension.split('.');

    // Ensure that there is at least one dot in the string (to have an extension)
    while (parts.length > 1) {
        // Remove the last part (the old extension)
        parts.pop();
    }

    // Join the remaining parts (the name) and append the new extension
    const newName = parts.join('.');
    const newImageString = `${directory}${newName}.${newExtension}`;

    return newImageString;
}

const ImageWebp = ( {src, onClick, alt, title}: ImageWebProps ) => {
    return (
        <picture onClick={onClick} className='card-img-top'>
            <source srcSet={toWebpImage({ imagePath: src, newExtension: 'webp' })} type='image/webp' />
            <img className='w-100 h-auto' src={src} title={title} alt={alt} />
        </picture>
    )
}

export default ImageWebp