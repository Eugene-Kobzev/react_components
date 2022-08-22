import { IProduct } from 'models'

interface fetchOptions {
  params?: string
}

interface IFetchProducts {
  options: fetchOptions
}

export const fetchProducts = async (options?: IFetchProducts): Promise<IProduct[] | any> => {
  const url = `https://fakestoreapi.com/products/?limit=12`
  const res = await fetch(url).then(res => res.json())
  return res
}