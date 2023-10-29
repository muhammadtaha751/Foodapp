import Navbar from '../views/Navbar'
import ArenaCard from '../views/ArenaCard'
import Footer from '../views/Footer'
import FooterTwo from '../views/FooterTwo'
import FooterThree from '../views/FooterThree'
function DashboardPage() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='banner_two'>
                <h1>Food and groceries delivery from <br /> ڪراچي Karachi’s best restaurants and <br /> shops</h1>
                <img src='https://images.deliveryhero.io/image/foodpanda/city-page/refresh-hero-city-pk.png?width=1264' />
            </div>

            <div>
                <h1>Saarey Restaurants</h1>
                <div className='cards'>
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                    <ArenaCard />
                </div>
            </div>

            <div>
                <center>
                <h1>Food Delivery in Karachi From Only The Best Restaurants</h1>
                <p>For those who like good food, exciting new options are now available in Karachi. Whether you live in Karachi, or are simply enjoying a holiday in the area, culinary delights aplenty are now just a simple online order away. The Karachi food delivery service has enjoyed a culinary renaissance in recent years, with a blossoming of new restaurants and take away eateries on almost every street; in fact, there are now literally hundreds of restaurants in Karachi, and foodpanda.com is the fastest, easiest and most reliable way of locating and ordering from the outlet of your choice. And whether you're in the mood for some comfortably familiar flavours, or fancy sampling some excitingly exotic dish, the meal of your choice is now just a few button clicks away, delivered fresh and piping hot to your door.</p>

                <h1>Why food delivery from foodpanda?</h1>
                <p>Our team of experts have paid a visit to every restaurant you’ll find here, and checked they’re up to our strict standards - only Karachi's most beloved spots are here to order from. Quickly place and pay for your order online, and find your food delivered straight to your door in no time at all.</p>

                <h1>Discover the Best Restaurants in Karachi</h1>
                <p>- Do you fancy fine, high quality food from an upscale, refined eatery? Then you'll love the Mediterranean, Italian fusion cuisine available at Okra restaurant, or Cafe Aylanto.
                    - Maybe you're in the mood for a hearty, beach-style barbecue? Kolachi restaurant or BBQ Tonight are ready and willing to oblige.
                    - Or perhaps you feel that spice is nice? Saffron or Dumpukht are two of the hottest Indian takeaways in town.
                    - And then there is the ultimate in social food, the pizza. Swap slices of this perennial crowd-pleaser with an order from Pompei Italian Restaurant Karachi, or 14th Street Pizza.</p>

                    </center>
            </div>

            <div>
                <Footer/>
            </div>
            <div>
                <FooterTwo/>
            </div>
            <div>
                <FooterThree/>
            </div>
        </div>
    )
}
export default DashboardPage