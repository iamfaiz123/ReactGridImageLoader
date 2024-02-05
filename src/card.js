import React from 'react';
import { useState } from 'react'
import { flushSync } from 'react-dom';

const Card = ({ image, title = 'this is yet to set', description = 'this random image is loaded from inter net', buttonText = 'click to change image' }) => {
    let [currentImage, setImage] = useState(12)
    let [currentImageUrl, setUrl] = useState(image)
    // add loader when learn useEffect
    // let [isLoading, setLoading] = useState(false)

    const changeImage = () => {
        setTimeout(() => { }, 2000)
        setImage((prev) => { return prev + 1 })
        setUrl(
            "https://picsum.photos/id/" + currentImage + "/1900/1080"
        )

    }

    return (
        <div className="transition duration-150 ease-out hover:ease-in max-w-sm rounded overflow-hidden shadow-lg px-8 py-8 bg-rose-600 hover:bg-rose-800 ">
            <>
                {/* {isLoading && <p>Loading image</p>}
                {!isLoading && <img className="transition-transform" src={currentImageUrl} alt={title} />} */}
                <img className="transition-transform" src={currentImageUrl} alt={title} />

            </>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base font-mono">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 focus:outline-none focus:ring focus:ring-violet-300">
                <a onClick={changeImage} className="inline-block bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-bold text-white text-center rounded-md px-5 py-3 uppercase transition ease-in-out duration-300">
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default Card;