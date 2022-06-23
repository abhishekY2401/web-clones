import "./MainPage.css";
import Place from "./Place";

import island from "../images/island.jpg";
import umbrella from "../images/umbrella.jpg";
import tinyhomes from "../images/tinyhomes.jpg";
import beaches from "../images/beaches.jpg";
import camping from "../images/camping.jpg";
import ufo from "../images/ufo.jpg";
import design from "../images/design.jpg";
import lakefront from "../images/lakefront.jpg";
import nationalparks from "../images/nationalparks.jpg";
import arctic from "../images/arctic.jpg";
import bedbreakfast from "../images/bedbreakfast.jpg";
import cabins from "../images/cabins.jpg";
import caves from "../images/caves.jpg";

const MainPage = () => {
  return (
    <div className="middle-part-page">
      <div className="main-pages">
        <a href="/">
          <img src={island} alt="island" />
        </a>
        <a href="/">
          <img src={umbrella} alt="umbrella" />
        </a>
        <a href="/">
          <img src={tinyhomes} alt="tinyhomes" />
        </a>
        <a href="/">
          <img src={beaches} alt="beaches" />
        </a>
        <a href="/">
          <img src={camping} alt="camping" />
        </a>
        <a href="/">
          <img src={ufo} alt="ufo" />
        </a>
        <a href="/">
          <img src={design} alt="design" />
        </a>
        <a href="/">
          <img src={lakefront} alt="lakefront" />
        </a>
        <a href="/">
          <img src={nationalparks} alt="nationalparks" />
        </a>
        <a href="/">
          <img src={arctic} alt="arctic" />
        </a>
        <a href="/">
          <img src={bedbreakfast} alt="bedbreakfast" />
        </a>
        <a href="/">
          <img src={cabins} alt="cabins" />
        </a>
        <a href="/">
          <img src={caves} alt="caves" />
        </a>
      </div>
      <div className="new-places">
        <Place
          image="https://a0.muscache.com/im/pictures/201a00f9-0c23-4e75-9115-4ce1ceed05f6.jpg?im_w=720"
          place="Thalang, Thailand"
          description="Designed by Jean-Michel Gathy"
          duration="30 Sep - 5 Oct"
          price="2,69,276 night"
        />
        <Place
          image="https://a0.muscache.com/im/pictures/monet/Luxury-20470768/original/a85ec930-b603-4825-b2a7-9f658a6a0e01?im_w=720"
          place="Koh Samui, Thailand"
          description="Designed by Gary Fell, GFAB Architects"
          duration="1-6 Jul"
          price="2,86,393 night"
        />
        <Place
          image="https://a0.muscache.com/im/pictures/miso/Hosting-9211435/original/c2d9cc72-535e-4e11-8725-8848f584a443.jpeg?im_w=720"
          place="Mirissa, Sri Lanka"
          description="Designed by Shigeru Ban"
          duration="1-6 Jul"
          price="53,442 night"
        />
        <Place
          image="https://a0.muscache.com/im/pictures/f2133b89-b041-49a3-99bc-20b595dcfa62.jpg?im_w=720"
          place="Tambon Thep Krasatti, Thailand"
          description="Designed by Fredo Traffin"
          duration="1-6 Jul"
          price="11,70,765 night"
        />
      </div>
    </div>
  );
};

export default MainPage;
