import { Outlet } from 'react-router-dom';
import { Link as RouteLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import InputIcon from '@mui/icons-material/Input';
import './style.scss'

interface ILayout {
  children: JSX.Element
}

export default function ({ children }: ILayout) {
  const blockClassName = 'page'

  return (
    <div className={blockClassName}>
      <div className={`${blockClassName}__header`}>

      </div>
      <div className={`${blockClassName}__page-wrapper`}>
        <div className={`${blockClassName}__sidebar`}>
          <MuiLink
            component={RouteLink}
            to='/'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5em'
            }}
          >
            <StoreIcon /> Fake Store
          </MuiLink>
          <MuiLink
            component={RouteLink}
            to='/dndinput'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5em'
            }}
          >
            <InputIcon /> Drag and drop
          </MuiLink>
        </div>
        <div className={`${blockClassName}__main`}>
          <Outlet />
          {children}
        </div>
      </div>

    </div>
  )
}