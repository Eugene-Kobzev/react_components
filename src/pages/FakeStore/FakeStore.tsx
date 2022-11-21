import { CircularProgress, Select, MenuItem } from '@mui/material';
import Product from 'components/common/Product/Product';
import { IProduct } from "models"
import ReactTable from 'components/common/ReactTable';
import useProducts from 'hooks/useProducts';
import { useMemo, useState } from 'react';

export default function () {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
  const { productsList, loading } = useProducts()
  const [displayMode, setdisplayMode] = useState('catalog')

  const content = useMemo(() => {
    if (displayMode === 'catalog') return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2em',
          flexWrap: 'wrap'
        }}
      >
        {productsList.map((product: IProduct) => <Product product={product} key={product.id} />)}
      </div>
    )

    const cols = [
      {
        label: 'id',
        title: 'ID'
      },
      {
        label: 'title',
        title: 'Title'
      },
      {
        label: 'price',
        title: 'Price'
      },
      {
        label: 'category',
        title: 'Category'
      },
      {
        label: 'rating',
        title: 'Rating'
      },
    ]

    const rows = productsList.map((product: IProduct) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        rating: product.rating ? product.rating.rate : '',
      }
    })

    return <ReactTable cols={cols} rows={rows} pagination />

  }, [productsList, displayMode])

  const handleDisplayModeChange = event => {
    const val = event.target.value
    setdisplayMode(val)
  }

  const Header = () => (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1em',
        paddingTop: '1em'
      }}
    >
      <h1>Store</h1>
      <div>
        <Select
          label='Display Mode'
          value={displayMode}
          onChange={handleDisplayModeChange}
          sx={{
            width: '15em'
          }}
        >
          <MenuItem value='list'>List</MenuItem>
          <MenuItem value='catalog'>Catalog</MenuItem>
        </Select>
      </div>
    </header>
  )

  return (
    <div >
      <Header />
      {
        loading
          ? <CircularProgress />
          : content
      }

    </div>
  )
}