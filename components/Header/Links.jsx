import { NavLink } from "./NavLink"

export const Links=({onClick})=>{

    const linksList =[
        {
            title:"Home",
            path:"#home"
        },
        {
            title:"Solutions",
            path:"#solutions"
        },
        {
            title:"Services",
            path:"#services"
        },
        {
            title:"Plans",
            path:"#plans"
        },
    ]
    return(
        <>
            {linksList.map(link=> <NavLink key={link.path} path={link.path} title={link.title} onClick={onClick}/>)}
        </>
    )
}