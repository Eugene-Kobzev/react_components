import { CircularProgress } from '@mui/material';
import Product from 'components/common/Product/Product';
import useProducts from 'hooks/useProducts';

export default function () {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
  const { productsList, loading } = useProducts()

  return (
    <div >
      <h1>Init</h1>
      <div
        style={{
          display: 'flex',
          gap: '2em',
          flexWrap: 'wrap'
        }}
      >
        {
          loading
            ? <CircularProgress />
            : productsList.map(product => <Product product={product} key={Math.random()} />)
        }
      </div>
    </div>
  )
}