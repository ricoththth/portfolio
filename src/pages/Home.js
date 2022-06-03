import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

function Home (){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <About/>
            <Footer/>
        </div>
    );
}

export default Home;