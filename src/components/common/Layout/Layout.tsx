import { Outlet } from 'react-router-dom';
import SidebarContent from './Parts/SidebarContent/SidebarContent'
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
        <SidebarContent className={`${blockClassName}__sidebar`} />
        <div className={`${blockClassName}__main`}>
          <Outlet />
          {children}
        </div>
      </div>

    </div>
  )
}