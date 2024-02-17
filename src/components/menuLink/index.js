import { NavLink } from 'react-router-dom'
import './MenuLink.css'

export default function MenuLink(props) {

    return(
        <NavLink to={props.to}>{props.children}</NavLink>
    )
}