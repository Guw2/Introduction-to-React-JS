import profPic from './assets/witcher.jpg'

function Card(){
    return(
        <div className="card">
            <img className="cardImage" src={profPic} alt="Image" />
            <h2 className="cardTitle">Example</h2>
            <p className="cardText">Lorem ipsum dolor sit amet</p>
        </div>
    );
}

export default Card;