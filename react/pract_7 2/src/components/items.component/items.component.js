import './items.css'; 
import { itemsData } from './items.data.js'
import { Item } from './item.component/item.js'


export const ItemsComponent = () => {
    return (
        <div className="products-section">
            <h2>Featured Products</h2>
            
            <div className="products-grid">
                {/* 3. Магія React: перетворюємо дані на HTML */}
                {itemsData.map((element, index) => (
                    <Item 
                        key={index} // Унікальний ключ (обов'язково для списків!)
                        image={element.image}
                        title={element.title}
                        price={element.price}
                        salePrice={element.salePrice}
                        currency={element.currency}
                    />
                ))}
            </div>
        </div>
    );
}