import { useState } from "react";
import { ShoppingCartOutlined, HeartOutlined, StarFilled, HeartFilled } from '@ant-design/icons';
import { InputNumber } from 'antd';
import './BookCard.css'



function BookCard({ id, title, creator,description, image, totalTarget, dateStart, dateEnd }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const heartIcon = isFavorite ? <><HeartFilled /></> : <><HeartOutlined /></>;

    const heartClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <>
            <div className="box-card">
                <img src={image} alt="" />
                <div className='box-content'>
                    <div className="author-starts">
                        <h3>by <a href="">{creator}</a></h3>
                        <div href="" className="btn-like" onClick={heartClick}>{heartIcon}</div>
                    </div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className='quantity'>
                        <div>Total Target: ${totalTarget}</div>
                        <div className="price">
                            <div className="invest-price"></div>
                        </div>
                        <div>Duration period: {dateStart} - {dateEnd}</div>
                    </div>
                </div >
            </div>
        </>
    );
}

export default BookCard;