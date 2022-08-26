import Modal from "components/common/Modal/Modal";
import './style.scss'

export interface IProductModalProps {
  image?: string,
  alt: string,
  open: boolean,
  // eslint-disable-next-line no-unused-vars
  openStateHandler(state: boolean): any,
}

export default ({ image, alt, open, openStateHandler }: IProductModalProps): JSX.Element => {

  const blockClassname = 'product-modal'

  return (
    <Modal
      open={open}
      openStateHandler={openStateHandler}
    >
      <div
        className={`${blockClassname}`}
      >
        <img src={image} alt={alt} className={`${blockClassname}__image`} />
      </div>
    </Modal>
  )
}