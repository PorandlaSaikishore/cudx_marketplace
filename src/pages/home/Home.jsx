import HeaderMenu from "../../components/HeaderMenu";
import BrowseData from '../../components/BrowseData'
import Header from '../../components/Header'
import Trusted from '../../components/Trusted'
import DataCount from '../../pages/home/DataCount'
import DataProducts from '../../pages/home/DataProducts'
import FAQs from '../../pages/home/FAQs'
import JoinAsProvider from '../../pages/home/JoinAsProvider'
import PopularData from '../../pages/home/PopularData'
import WhoUse from '../../pages/home/WhoUse'
import Why from '../../pages/home/why'
import Footer from '../../components/Footer'

function Home(){
    return(<>
    
     <HeaderMenu />
        <Header />
        <Trusted />
        <Why />
        <BrowseData />
        <WhoUse />
        <PopularData />
        <DataCount />
        <JoinAsProvider />
        <DataProducts />
<FAQs />
<Footer />
    </>)
}

export default Home;