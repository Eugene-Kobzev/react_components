import { NavLink as RouteLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import InputIcon from '@mui/icons-material/Input';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './style.scss'

interface ISidebarContent {
  className?: string,
}

interface IMenuEl {
  className?: string,
  title: string,
  to: string,
  icon?: JSX.Element
}

const MenuEl = ({ className, title, to, icon }: IMenuEl): JSX.Element => (
  <MuiLink
    component={RouteLink}
    to={to}
    className={className}
  >
    {icon} <span>{title}</span>
  </MuiLink>
)

export default function ({ className }: ISidebarContent): JSX.Element {

  //className={`${className}-navlink`}

  return (
    <div className={className}>
      <MenuEl
        className={`${className}-navlink`}
        title="Fake Store"
        to='/'
        icon={<StoreMallDirectoryOutlinedIcon />}
      />
      <MenuEl
        className={`${className}-navlink`}
        title="Products in cart"
        to='/productincart'
        icon={<ShoppingCartOutlinedIcon />}
      />
      <MenuEl
        className={`${className}-navlink`}
        title="Drag and drop"
        to='/dndinput'
        icon={<InputIcon />}
      />

    </div>
  )
}