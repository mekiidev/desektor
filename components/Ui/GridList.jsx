
export const GridList = ({children})=>{
    return(
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">{children}</div>
    )
}