import {ImageItem} from "@/components/Ui/ImageItem"
import {LineScrollPart} from "./LineScrollPart"
import {GridList} from "@/components/Ui/GridList"
import image1 from "@/assets/solutions/UI-UX-Landing Page-29.png"
import image2 from "@/assets/solutions/UI-UX-Landing Page-30.png"
import image3 from "@/assets/solutions/UI-UX-Landing Page-31.png"
import image4 from "@/assets/solutions/UI-UX-Landing Page-32.png"
import image5 from "@/assets/solutions/UI-UX-Landing Page-33.png"
import image6 from "@/assets/solutions/UI-UX-Landing Page-34.png"
export const Solutions = () =>{
    return(
        <section id="solutions" className="py-16 text-heading">
            <LineScrollPart />
            <h2 className=" text-6xl md:text-9xl text-center z-50 -translate-y-[300%] md:-translate-y-[200%] lg:-translate-y-[260%] xl:-translate-y-[300%] ">Solutions</h2>
            <br></br>
            <div className="container">
                <GridList>
                    <ImageItem src={image1} />
                    <ImageItem src={image2} />
                    <ImageItem src={image3} />
                    <ImageItem src={image4} />
                    <ImageItem src={image5} />
                    <ImageItem src={image6} />
                </GridList>

            </div>
        </section>
    )
}