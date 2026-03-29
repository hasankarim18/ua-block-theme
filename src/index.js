import "../css/style.scss";

// Our modules / classes
import GoogleMap from "./modules/GoogleMap";
import HeroSlider from "./modules/HeroSlider";
import Like from "./modules/Like";
import MobileMenu from "./modules/MobileMenu";
import MyNotes from "./modules/MyNotes";
import Search from "./modules/Search";

// Instantiate a new object using our modules/classes
const mobileMenu = new MobileMenu();
const heroSlider = new HeroSlider();
const googleMap = new GoogleMap();
const search = new Search();
const myNotes = new MyNotes();
const like = new Like();

//alert("hello from src/index.js");
