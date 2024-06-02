import './PortfolioCard.css';
function PortfolioCard({img, title, description}) {
    return (
        <div className='portfolio-item'>
            {img}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default PortfolioCard;