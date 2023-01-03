
import "./products.css"

export function Macchiato(props) {
    return(
                    <div className='productList'>
            <div key={props.id} className='productCard'>
                <a href={props.link}><img src={props.image} alt='product-img' className='productImage'></img></a>

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                    </div>
                    <div className='displayStack__2'>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}