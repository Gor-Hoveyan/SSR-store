import { ProductType } from '@/utils/types';
import Image from 'next/image';
import styles from './productCard.module.scss';
import { AiFillStar } from "react-icons/ai";
import { BsCart4, BsCart2 } from "react-icons/bs";
import Link from 'next/link';


export default async function ProductCard({ product }: { product: ProductType }) {
    return (
        <div className={styles.productCardContainer}>
            <Image className={styles.productCardImage} src={product.image} alt={product.title} width={200} height={200} />
            <p className={styles.productCardName}>{product.title}</p>
            <p className={styles.cardPrice}>{product.price}$</p>
            <Link href={`/products/${product.id}`}><button className={styles.cardBtn}> <BsCart2 fontWeight={700} />Details</button></Link>
            <p>
                <AiFillStar color='orange' />{product.rating.rate}   <BsCart4 />{product.rating.count}
            </p>
        </div>
    )
}
