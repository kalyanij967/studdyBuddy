import CardSection from '../CardSection/CardSection';
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import Card from '../Cards/Cards';
import Hero from '../Hero/Hero';
const Home = () => {
    return (
        <>
            <div className="home">
                <HomeCarousel/>
                <br />
                <CardSection/>
                <Hero/>
                <Card/>
               


            </div>

        </>
    )
}

export default Home;