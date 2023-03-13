import electrical from '../../assets/electricalWiring.jpg';
import solar from '../../assets/solarField.avif';
import cctv from "../../assets/cctvFix.jpg";
import partnership from "../../assets/partnership.avif";
import cctvAd from "../../assets/cctvad.png";
import floodLight from "../../assets/floodLight.png";
import solar1 from "../../assets/solar.png";
import solar2 from "../../assets/solar1.png";
import solarBattery from "../../assets/solarBattery.png";
import charger from "../../assets/solarcharger.png";
import solarr from '../../assets/solarr.png';
import solarTraining from "../../assets/solarTraining.png";
import training from "../../assets/training.png";
import cctvTraining from "../../assets/solartrainingAd.png";

export const servicesPageData = {
  solarinstallations: {
    id: 1,
    title: "solar installation and maintenance",
    routeName: "solarinstallations",
    backgroundImage:`${solar}`,
    info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            molestiae sunt. Sapiente at maxime voluptate, itaque optio aperiam.
            Consequuntur, repudiandae dolorem distinctio ex eveniet debitis
            recusandae, asperiores quae consectetur sint aspernatur minus
            obcaecati praesentium dolores! Veniam, explicabo vel atque
            asperiores aspernatur in molestiae, ratione laudantium recusandae
            iusto excepturi odio, voluptatem commodi placeat adipisci. Deleniti
            repudiandae pariatur dicta tempora facere voluptatum itaque
            distinctio impedit non obcaecati dolore, accusantium quidem quasi`,
    services: [
      "solar installation",
      "sales of solar material/gadgets",
      "solar maintenance",
      "solar installaion trainings",
    ],
    photoGallery: [solarr,floodLight, charger, solar1, training, solar2, solarTraining, solarBattery],
  },
  CCTVinstallations: {
    id: 2,
    title: "CCTV camera  installation",
    backgroundImage:`${cctv}`,
    routeName: "CCTVinstallations",
    info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            molestiae sunt. Sapiente at maxime voluptate, itaque optio aperiam.
            Consequuntur, repudiandae dolorem distinctio ex eveniet debitis
            recusandae, asperiores quae consectetur sint aspernatur minus
            obcaecati praesentium dolores! Veniam, explicabo vel atque
            asperiores aspernatur in molestiae, ratione laudantium recusandae
            iusto excepturi odio, voluptatem commodi placeat adipisci. Deleniti
            repudiandae pariatur dicta tempora facere voluptatum itaque
            distinctio impedit non obcaecati dolore, accusantium quidem quasi`,
    services: [
      "CCTV camera installation",
      "sales of CCTV cameras",
      "CCTV camera maintenance",
      "CCTV camera installaion trainings",
    ],
    photoGallery: [
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",cctvAd, cctvTraining,
      "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      "https://i.ibb.co/RjBLWxB/grey-brim.png",
    ],
  },
  generalhousewiring: {
    id: 3,
    title: "general house wiring",
    backgroundImage:`${electrical}`,
    routeName: "generalhousewiring",
    info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            molestiae sunt. Sapiente at maxime voluptate, itaque optio aperiam.
            Consequuntur, repudiandae dolorem distinctio ex eveniet debitis
            recusandae, asperiores quae consectetur sint aspernatur minus
            obcaecati praesentium dolores! Veniam, explicabo vel atque
            asperiores aspernatur in molestiae, ratione laudantium recusandae
            iusto excepturi odio, voluptatem commodi placeat adipisci. Deleniti
            repudiandae pariatur dicta tempora facere voluptatum itaque
            distinctio impedit non obcaecati dolore, accusantium quidem quasi`,
    services: [
      "general house wiring",
      "electrical maintenance",
      "electrical wiring trainings",
    ],
    photoGallery: [
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    ],
  },
  partnership: {
    id: 4,
    title: "partnership",
    backgroundImage:`${partnership}`,
    routeName: "partnership",
    info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            molestiae sunt. Sapiente at maxime voluptate, itaque optio aperiam.
            Consequuntur, repudiandae dolorem distinctio ex eveniet debitis
            recusandae, asperiores quae consectetur sint aspernatur minus
            obcaecati praesentium dolores! Veniam, explicabo vel atque
            asperiores aspernatur in molestiae, ratione laudantium recusandae
            iusto excepturi odio, voluptatem commodi placeat adipisci. Deleniti
            repudiandae pariatur dicta tempora facere voluptatum itaque
            distinctio impedit non obcaecati dolore, accusantium quidem quasi`,
    services: ["general partnership", "assistance and aids"],
    photoGallery: [
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    ],
  },
};
