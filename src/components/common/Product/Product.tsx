import { IProduct } from "models"
import './style.scss'

interface IProductProps {
  product: IProduct
}

export default function ({ product }: IProductProps) {
  const blockClassName = 'product'

  return (
    <div
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
        <img
          src={product.image}
          alt=""
          className={`${blockClassName}__image`}
        />
      </div>
      <hr />
      {product.description}
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
    </div>
  )
}  