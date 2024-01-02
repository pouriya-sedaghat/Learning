import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

function HomePage(props) {

  const { products } = props;

  return (
    <>
      <h2>Home Page</h2>
      <ul>
        {
          products.map((item, index) => {
            return (
              <li key={index.toString()}><Link href={`/${item.id}`}>{item.title}</Link></li>
            );
          })
        }
      </ul>
    </>
  );
}

export default HomePage;

export async function getStaticProps() {

  // return {
  //   props: { products: [{ title: 'product 1', price: 1000 }, { title: 'product 2', price: 2000 }, { title: 'product 3', price: 3000 }] }
  // }

  // fs.readFile
  // fs.readFileSync

  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonDate = await fs.readFile(filePath);
  const data = JSON.parse(jsonDate);

  return {
    props: { products: data.products }
  }
}