import { GridList } from "@/components/Ui/GridList"
import {ImageItem} from "@/components/Ui/ImageItem"
import img1 from "@/assets/services/UI-UX-Landing Page-23.png"
import img2 from "@/assets/services/UI-UX-Landing Page-24.png"
import img3 from "@/assets/services/UI-UX-Landing Page-25.png"
import img4 from "@/assets/services/UI-UX-Landing Page-26.png"
import img5 from "@/assets/services/UI-UX-Landing Page-27.png"
import img6 from "@/assets/services/UI-UX-Landing Page-28.png"


export const Services = () =>{
    

    return(
        <section id="services">
            <h2 className=" text-4xl md:text-6xl text-center py-8 text-heading">Our Comprehensive <span className="text-yellow-500">Branding</span> Services</h2>
            <div className="container ">
                <GridList >
                    <ImageItem src={img1} />
                    <ImageItem src={img2} />
                    <ImageItem src={img3} />
                    <ImageItem src={img4} />
                    <ImageItem src={img5} />
                    <ImageItem src={img6} />
                </GridList>
            </div>
        </section>
    )
}