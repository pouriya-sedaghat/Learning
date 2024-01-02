import { useRef, useState } from 'react';

function HomePage() {

  const [data, setData] = useState([]);

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  async function addProductHandle(e) {

    e.preventDefault();

    const title = titleInputRef.current.value;
    const price = priceInputRef.current.value;

    // console.log(title, price);

    const reqBody = { title, price }

    const response = await fetch('http://localhost:3000/api/product', { method: 'POST', body: JSON.stringify(reqBody), headers: { 'Content-Type': 'application/json' } });
    const responseData = await response.json();
    console.log(responseData);

  }

  async function showProductsHandle() {
    const response = await fetch('http://localhost:3000/api/product');
    const responseData = await response.json();
    setData(responseData.data);
    console.log(responseData.data);
  }

  return (
    <>
      <h2>Home Page</h2>
      <form onSubmit={addProductHandle}>
        <div>
          <input type='text' placeholder='title' ref={titleInputRef} />
        </div>
        <div>
          <input type='text' placeholder='price' ref={priceInputRef} />
        </div>
        <button>Add Product</button>
      </form>

      <button onClick={showProductsHandle}>Show Products</button>
      <ul>
        {
          data.map((item, index) => {
            return (
              <>
                <li key={index.toString()}>title : {item.title} price : {item.price}</li>
              </>
            );
          })
        }
      </ul>
    </>
  )
}

export default HomePage;