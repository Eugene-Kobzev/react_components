import { IProduct } from "models"
import { Card, CardContent, CardActions } from '@mui/material'
import './style.scss'

interface IProductProps {
  product: IProduct
}

export default function ({ product }: IProductProps) {
  const blockClassName = 'product'

  return (
    <Card
      className={`${blockClassName}`}
    >
      <div
        className={`${blockClassName}__header`}
      >
        <div
          style={{
            width: '48%',
          }}

        >
          <h3>{product.title}</h3>
          <div
            className={`${blockClassName}__price`}
          >
            {product.price} $
          </div>
        </div>
        <div
          style={{
            height: '194px',
            width: '50%',
            backgroundImage: `url(${product.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 0%',
          }}
          className={`${blockClassName}__image`}
        />
      </div>
      <hr />
      <CardContent>
        {product.description}
      </CardContent>
      <CardActions>
        <div
          className={`${blockClassName}__rating`}
        >
          <div>
            {product.rating?.rate}
          </div>
          <div>
            {product.rating?.count}
          </div>
        </div>
      </CardActions>

    </Card>
  )
}  