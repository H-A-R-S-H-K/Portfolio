import './InterestCard.css';
function InterestCard({img, title}) {
    return (
        <div className='interest-card'>
            {img}
            <p>{title}</p>
        </div>
    )
}

export default InterestCard;