import { ProductType } from '@/utils/types';
import styles from './page.module.scss'
import ProductCard from './components/productCard/ProductCard';

export default async function Home() {
  const data = await getProducts();
  return (
    <main className={styles.main}>
      <h1 className={styles.mainHeader}>Online store</h1>
      <div className={styles.cardsContainer}>
      {
        data.map((product: ProductType, index: number) => {
          return <ProductCard key={index} product={product} />
        })
      }
      </div>
    </main>
  )
}

const getProducts = async () => {
  const data = fetch(`https://fakestoreapi.com/products`, {
    method: 'GET'
  })

  return (await data).json();
}