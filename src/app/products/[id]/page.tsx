import { ProductType } from '@/utils/types';
import styles from './page.module.scss';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';

export default async function Product({ params }: { params: { id: string } }) {
    const product: ProductType = await getProduct(params.id);
    return (
        <div className={styles.productContainer}>
            <div>
                <Image src={product.image} alt={product.title} width={500} height={500} className={styles.productImage}/>
            </div>
            <div>
                <h1 className={styles.productHeader}>{product.title}</h1>
                <h3 className={styles.productDescription}>{product.description}</h3>
                <h2 className={styles.productPrice}>{product.price}$</h2>
                <div className={styles.productBtns}>
                    <button className={styles.productBtn}>Add to cart</button>
                    <button className={styles.productBtn}>Buy</button>
                </div>
                <p className={styles.productRating}><AiFillStar color='orange' />{product.rating.rate}   <BsCart4 />{product.rating.count}</p>
            </div>
        </div>
    );
}

const getProduct = async (id: string) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'GET'
    });

    return await data.json();
}