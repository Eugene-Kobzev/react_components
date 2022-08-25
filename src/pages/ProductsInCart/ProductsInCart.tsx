import { useMemo } from 'react';
import { CircularProgress, Link } from '@mui/material';
import useProducts from 'hooks/useProducts';
import GridList from 'components/common/GridList/GridList';
import { IProduct } from 'models'

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
  const { productsList, loading } = useProducts()

  const cols = [
    {
      label: 'title',
      title: 'Product',
    },
    {
      label: 'price',
      title: 'Price',
      options: {
        xs: 1,
      },
    },
    {
      label: 'category',
      title: 'Category',
      options: {
        xs: 2,
      },
    },
    {
      label: 'rating',
      title: 'Rating',
      options: {
        xs: 1,
      },
    },
    {
      label: 'buttons',
      title: ' ',
      options: {
        xs: 2,
      },
    },
  ]

  const options = {
    showHeading: true
  }

  const rows = useMemo(() => {
    console.log({ productsList })
    if (loading) return undefined
    return productsList.map((item: IProduct) => {
      return {
        cells: {
          'title': { content: item.title },
          'price': { content: `${item.price}$`, },
          'category': { content: item.category, },
          'rating': { content: item.rating?.rate, },
          'buttons': { content: <Link href={item.image} target="_blank" rel="noreferrer">Show</Link>, },
        }
      }
    })
  }, [loading])

  return (
    <div >
      <h1>Products you chose</h1>
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
            : <GridList
              cols={cols}
              rows={rows}
              options={options}
            />
        }
      </div>
    </div>
  )
}

//productsList.map(product => <Product product={product} key={Math.random()} />)
