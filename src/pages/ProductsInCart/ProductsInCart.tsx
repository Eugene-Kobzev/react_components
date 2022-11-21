import { useMemo, useState } from 'react';
import { CircularProgress, Button } from '@mui/material';
import useProducts from 'hooks/useProducts';
import GridList from 'components/common/GridList';
import ProductImgModal from 'components/complex/ProductImgModal';
import { IProduct } from 'models'
import './style.scss'

interface IButtonArea {
  image?: string,
  alt?: string,
  // eslint-disable-next-line no-unused-vars
  openModal(alt?: string, image?: string): void
}

const ButtonsArea = ({ image, alt, openModal }: IButtonArea) => (
  <Button variant="text" onClick={() => openModal(alt, image)}>Show</Button>
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

  const [alt, setalt] = useState('')
  const [image, setimage] = useState('')
  const [open, setopen] = useState(false)

  const handleOpenmodal = (alt: string, image: string) => {
    setalt(alt)
    setimage(image)
    setopen(true)
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
          'buttons': { content: <ButtonsArea image={item.image} alt={item.title} openModal={handleOpenmodal} />, },
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
      <ProductImgModal
        image={image}
        alt={alt}
        open={open}
        openStateHandler={setopen}
      />
    </div>
  )
}
