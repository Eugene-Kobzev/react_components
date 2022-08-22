import { fetchProducts } from 'api'
import { useEffect, useState } from 'react';

export default function () {
  const [productsList, setProductsList] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProdutcsHere = async () => {
    const res = await fetchProducts()
    setProductsList(res)
    setLoading(false)
  }

  useEffect(() => {
    fetchProdutcsHere()
  }, [])

  return { productsList, loading }
}