import CardSection from '../CardSection/CardSection';
import HomeCarousel from '../HomeCarousel/HomeCarousel'

const Home = () => {
    return (
        <>
            <div className="home">
                <HomeCarousel/>
                <br />
                <CardSection/>
            </div>
        </>
    )
}

export default Home;