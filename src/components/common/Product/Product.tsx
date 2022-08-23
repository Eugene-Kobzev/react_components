import { IProduct } from "models"
import { Card, CardHeader, CardMedia, CardContent, CardActions } from '@mui/material'
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
        <div>
          <h3>{product.title}</h3>
          <div
            className={`${blockClassName}__price`}
          >
            {product.price} $
          </div>
        </div>
        <CardMedia
          component="img"
          height="194"
          image={product.image}
          alt={product.title}
        // className={`${blockClassName}__image`}
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