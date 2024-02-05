import Card from './card.js'
import './index.css'
function background() {

    // default card data
    let cardData = [
        "https://picsum.photos/id/1/1900/1080",
        "https://picsum.photos/id/2/1900/1080",
        "https://picsum.photos/id/3/1900/1080",
        "https://picsum.photos/id/4/1900/1080",
        "https://picsum.photos/id/5/1900/1080",
        "https://picsum.photos/id/6/1900/1080",
        "https://picsum.photos/id/7/1900/1080",
        "https://picsum.photos/id/8/1900/1080",
        "https://picsum.photos/id/9/1900/1080",
    ]
    return (
        <div className="flex flex-wrap justify-center bg-rose-700 py-8 px-8">
            {cardData.map((card) => (
                <Card image={card} />
            ))}
        </div>
    );
}

export default background 