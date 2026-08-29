import ImageSlider from "../components/imageslider/ImageSlider";
import Navbar from "../components/navbar/navbar";

import acaiPic from "../assets/breakfast_lunch_pics/acai.jpg";
import avocadoToastPic from "../assets/breakfast_lunch_pics/avocado_toast.jpg";
import crepePic from "../assets/breakfast_lunch_pics/crepes.jpeg";
import eggBitesPic from "../assets/breakfast_lunch_pics/egg_bites.jpg";
import eggHolePic from "../assets/breakfast_lunch_pics/egg_hole.jpg";
import frenchToastPic from "../assets/breakfast_lunch_pics/french_toast.jpg";
import oatsPic from "../assets/breakfast_lunch_pics/oats.jpg";
import omelletePic from "../assets/breakfast_lunch_pics/omellete.jpg";
import potatosPic from "../assets/breakfast_lunch_pics/potatos.jpg";
import turkeySandwichPic from "../assets/breakfast_lunch_pics/turkey_sandwhich.jpg";
import wafflePic from "../assets/breakfast_lunch_pics/waffle.jpg";

function Home() {
  const breakfastImages = [
    acaiPic,
    avocadoToastPic,
    crepePic,
    eggBitesPic,
    eggHolePic,
    frenchToastPic,
    oatsPic,
    omelletePic,
    potatosPic,
    turkeySandwichPic,
    wafflePic,
  ];

  return (
    <>
      <Navbar></Navbar>
      <ImageSlider images={breakfastImages} />
    </>
  );
}

export default Home;
