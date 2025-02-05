import { TbWorld } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const userPreferences= [
    {
      title: "Types of Weddings",
      value: ["Hindu Wedding", "Muslim Wedding", "Sikh Wedding", "Christian Wedding", "Buddhist Wedding"],
    },
    {
      title: "Wedding Attire",
      value: ["Sherwani", "Lehenga", "Saree", "Tuxedo", "Anarkali Suit"],
    },
    {
      title: "Wedding Venues",
      value: ["Beach", "Palace", "Garden", "Banquet Hall", "Farmhouse"],
    },
    {
      title: "Wedding Rituals",
      value: ["Mehendi Ceremony", "Haldi Ceremony", "Sangeet", "Pheras", "Nikah"],
    },
    {
      title: "Food and Catering",
      value: ["Vegetarian Menu", "Non-Vegetarian Menu", "Desserts", "Buffet", "Live Counters"],
    },
    {
      title: "Photography Styles",
      value: ["Candid Photography", "Traditional Photography", "Pre-Wedding Shoot", "Drone Photography", "Cinematic Videography"],
    },
    {
      title: "Wedding Decor",
      value: ["Floral Arrangements", "Lighting Decor", "Mandap Setup", "Stage Decor", "Table Centerpieces"],
    },
    {
      title: "Entertainment Options",
      value: ["Live Band", "DJ", "Dance Performances", "Fireworks", "Stand-up Comedy"],
    },
    {
      title: "Wedding Gifts",
      value: ["Customized Hampers", "Cash Envelopes", "Home Decor Items", "Jewelry", "Gift Cards"],
    },
    {
      title: "Honeymoon Destinations",
      value: ["Maldives", "Goa", "Paris", "Switzerland", "Kerala"],
    },
  ];
const vendorDetails_p1=[
  {
    title:"Business Name",
    value:"",
    type:"text",
    placeholder:"Enter Business Name",
    name:"businessName"
  },
  {
    title:"Business Email",
    value:"",
    type:"email",
    placeholder:"Enter Business Email",
    name:"businessEmail"
  },
  {
    title:"Business Phone",
    value:"",
    type:"number",
    placeholder:"Enter Business Phone",
    name:"businessPhone"
  },
  {
    title:"Password",
    value:"",
    type:"password",
    placeholder:"Enter password",
    name:"password"
  }
]
const searchSection = [
  {
    title: "Most searched cities",
    value: ["Mumbai", "Delhi", "Chennai", "Pune", "Ahmedabad", "Gwalior", "Madras", "Varanasi"]
  },
  {
    title: "Wedding type",
    value: ["Destination", "Beach", "Ritual", "Traditional", "Modern", "Eco-Friendly"]
  },
  {
    title: "Popular wedding venues",
    value: ["Banquet Hall", "Resort", "Beachside", "Palace", "Garden", "Farmhouse", "Cruise", "Temple"]
  },
  {
    title: "Top wedding themes",
    value: ["Royal", "Vintage", "Fairy Tale", "Rustic", "Bohemian", "Minimalist", "Floral", "Seasonal"]
  },
  {
    title: "Preferred wedding cuisines",
    value: ["North Indian", "South Indian", "Mughlai", "Continental", "Chinese", "Italian", "Fusion", "Dessert Buffet"]
  },
  {
    title: "Wedding decoration styles",
    value: ["Floral", "LED Lights", "Traditional Drapes", "Balloon Art", "Themed Backdrops", "Rustic Chic", "Crystal Decor"]
  },
  {
    title: "Bridal outfit styles",
    value: ["Lehenga", "Saree", "Gown", "Anarkali", "Sharara", "Traditional Silk", "Fusion Attire"]
  },
  {
    title: "Groom outfit styles",
    value: ["Sherwani", "Tuxedo", "Kurta Pajama", "Achkan", "Suit", "Indo-Western", "Bandhgala"]
  },
  {
    title: "Trending wedding accessories",
    value: ["Jewelry Sets", "Mehendi Designs", "Footwear", "Turbans", "Clutches", "Brooches", "Kaleeras"]
  },
  {
    title: "Wedding photography styles",
    value: ["Candid", "Traditional", "Cinematic", "Pre-Wedding Shoot", "Drone Shots", "Vintage Filters", "Black & White"]
  },
  {
    title: "Common wedding rituals",
    value: ["Sangeet", "Mehendi", "Haldi", "Pheras", "Bidaai", "Reception", "Engagement Ceremony"]
  },
  {
    title: "Popular honeymoon destinations",
    value: ["Maldives", "Switzerland", "Bali", "Paris", "Kerala", "Himachal Pradesh", "Thailand", "Santorini"]
  }
];
const userProfileContent=[
  {
    title:"Username",
    value:"Ujjwal"
  },{
    title:"Location",
    value:"Mumbai"
  },
  {
    title:"Number of events planned",
    value:"0"
  },{
    title:"Upcoming events",
    value:"Null"
  }
]

const vendorSocialHandle=[
  {
    icon:<TbWorld/>
  },
  {
    icon:<BsInstagram/>
  },
  {
    icon:<FaFacebookF/>
  }
]
export {userPreferences,vendorDetails_p1,searchSection,userProfileContent,vendorSocialHandle}