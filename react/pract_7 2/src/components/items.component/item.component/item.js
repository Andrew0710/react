import './CardItem.css'; 


export const Item = ({ image, title, price, salePrice, currency }) => {
    return (
        <div className="product-card">
            {salePrice && <span className="sale-badge">SALE</span>}
            <img src={image} alt={title} className="product-image" />
            <h3 className="product-title">{title}</h3>
            <div className="product-price">
                {salePrice ? (
                    <>
                        <span className="price-sale">{currency}{salePrice}</span>
                        <span className="price-original">{currency}{price}</span>
                    </>
                ) : (
                    // тут чат написав бо не знав як ту знижку з закресленням зробити
                    <span>{currency}{price}</span>
                )}
            </div>
        </div>
    );
}