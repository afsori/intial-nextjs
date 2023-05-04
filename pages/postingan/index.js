import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Postingan() {
    const [isDataProduct, setDataProduct] = useState([]);

    async function getAllProduct(){
        let dataProduct = await fetch('https://dummyjson.com/products?limit=10')
        .then(res => res.json())
        setDataProduct(dataProduct?.products)
        console.log('dataProduct',dataProduct)
    }
  
    useEffect(()=>{
      getAllProduct()
    }, [])
  
    return (
      <div className='container'>
        {
          isDataProduct.map((item) => (
            <div key={item.id} className="card" style={{width: '18rem'}}>
              {/* <Image src={item.thumbnail} width={100} height={100} className="card-img-top" alt={item.thumbnail} /> */}
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-title">{item.category}</p>
                <p className="card-title">{item.brand}</p>
                <p className="card-text">{item.description}</p>
                <Link href={`/postingan/${item.id}`}>Go Detail</Link>
              </div>
            </div>
          ))
        }
      </div>
    )
}

export default Postingan