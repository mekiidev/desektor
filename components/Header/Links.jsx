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
            title:"Plans",
            path:"#"
        },
    ]
    return(
        <>
            {linksList.map(link=> <NavLink key={link.path} path={link.path} title={link.title} onClick={onClick}/>)}
        </>
    )
}