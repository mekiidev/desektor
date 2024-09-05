'use client'
import Link from "next/link"


export const NavLink = ({path,title,onClick})=>{
    return(
        <Link className={`text-3xl text-heading font-bold`} onClick={onClick} href={path}>{title}</Link>
    )
}