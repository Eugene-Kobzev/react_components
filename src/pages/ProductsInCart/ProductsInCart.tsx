import { useMemo } from 'react';
import { CircularProgress, Link } from '@mui/material';
import useProducts from 'hooks/useProducts';
import GridList from 'components/common/GridList/GridList';
import { IProduct } from 'models'
import './style.scss'

interface IButtonArea {
  image?: string
}

const ButtonsArea = ({ image }: IButtonArea) => (
  <Link href={image} target="_blank" rel="noreferrer">Show</Link>
)

export default () => {

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
    if (loading) return undefined
    return productsList.map((item: IProduct) => {
      return {
        cells: {
          'title': { content: item.title },
          'price': { content: `${item.price}$`, },
          'category': { content: item.category, },
          'rating': { content: item.rating?.rate, },
          'buttons': { content: <ButtonsArea image={item.image} />, },
        }
      }
    })
  }, [loading, productsList])

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
              className="products-list"
            />
        }
      </div>
    </div>
  )
}

//productsList.map(product => <Product product={product} key={Math.random()} />)
