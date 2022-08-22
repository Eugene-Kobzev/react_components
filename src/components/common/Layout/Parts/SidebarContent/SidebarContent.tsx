import { NavLink as RouteLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import InputIcon from '@mui/icons-material/Input';
import './style.scss'

interface ISidebarContent {
  className?: string,

}

export default function ({ className }: ISidebarContent): JSX.Element {

  return (
    <div className={className}>
      <MuiLink
        component={RouteLink}
        to='/'
        className={`${className}-navlink`}
      >
        <StoreIcon /> <span>Fake Store</span>
      </MuiLink>
      <MuiLink
        component={RouteLink}
        to='/dndinput'
        className={`${className}-navlink`}
      >
        <InputIcon /> <span>Drag and drop</span>
      </MuiLink>
    </div>
  )
}