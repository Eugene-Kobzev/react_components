import { Modal } from '@mui/material';
import './style.scss'

export interface IModalProps {
  children?: JSX.Element,
  open: boolean,
  // eslint-disable-next-line no-unused-vars
  openStateHandler(state: boolean): any,
}

export default ({ children, open, openStateHandler }: IModalProps): JSX.Element => {
  const handleClose = () => openStateHandler(false);
  const blockClassname = 'modal'

  return (
    <Modal open={open} onClose={handleClose} className={`${blockClassname}`}>
      <div
        className={`${blockClassname}__popup`}
      >
        {children}
      </div>
    </Modal>
  );
}
