import Bestseller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import Categories from "../components/Categories";

import MainBanner from "../components/MainBanner";
import { NewsLetter } from "../shopping_assets/NewsLetter";

export default function Home(){
    return(
        <div className="mt-10">
            <MainBanner/>
            <Categories/>
            <Bestseller/>
            <BottomBanner/>
            <NewsLetter/>
            
        </div>
    )
}