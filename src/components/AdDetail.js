import Navbar from "../views/Navbar"
import AdCard from "../views/AdCard"
import Footer from "../views/Footer"
function AdDetail(){
    return(
        <div>
        <div>
<Navbar/>
</div>
<div>
<div className="adBar">

    <a href="#">
        <p>Homepage</p>
    </a>
    <a href="#">
        <p>Karachi</p>
    </a>
    <a href="#">
        <p>Bismiillah Pakwan House</p>
    </a>
</div>
    <p>Fast Food . Beverages . Pakistani . Tea & Coffee . Paratha</p>
    <a href="#"><h4>Bismiillah Pakwan House</h4></a>
    <div className="delivery">
<a href="#">Free Delivery</a>
<a href="#">Rs.249 Minimum</a>
<a href="#">Rs. 7.99 Service Fee</a>
</div>

<div className="button">
    <div className="review" >
    <p>3.8/5</p>
    <a href="#">See Reviews</a>
    <a href="#">More info</a>
    </div>
    <div>
        <button>Add Favourite</button>
    </div>
</div>
</div>

<div>
    <div>
        <h3>Popular</h3>
        <p>Most Ordered Right Now</p>
    </div>
    <div className="AD row-2">
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
        <AdCard/>
    </div>
</div>
<div>
    <Footer/>
</div>
        </div>
    )
}

export default AdDetail