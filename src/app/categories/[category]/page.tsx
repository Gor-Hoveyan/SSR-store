import styles from './category.module.scss';
import { ProductType } from '@/utils/types';
import ProductCard from '@/app/components/productCard/ProductCard';

export default async function Category({ params }: { params: { category: string } }) {
    const category = params.category;
    const data = await getProducts(category); debugger

    return (
        <div className={styles.categoryContainer}>
            <h1 className={styles.categoryHeader}>{data[0].category}</h1>
            <div className={styles.cardsContainer}>
                {
                    data.map((product: ProductType, index: number) => {
                        return <ProductCard key={index} product={product} />
                    })
                }
            </div>
        </div>
    );
}


const getProducts = async (category: string) => {
    const data = await fetch(`https://fakestoreapi.com/products/category/${category}`, {
        method: 'GET'
    })

    return await data.json();
}