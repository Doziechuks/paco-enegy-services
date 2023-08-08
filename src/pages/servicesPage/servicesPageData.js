import electrical from "../../assets/electricalWiring.jpg";
import solar from "../../assets/solarField.avif";
import cctv from "../../assets/cctvFix.jpg";
import partnership from "../../assets/partnership.avif";
import cctvAd from "../../assets/cctvad.png";
import floodLight from "../../assets/floodLight.png";
import solar1 from "../../assets/solar.png";
import solar2 from "../../assets/solar1.png";
import solarBattery from "../../assets/solarBattery.png";
import charger from "../../assets/solarcharger.png";
import solarr from "../../assets/solarr.png";
import solarTraining from "../../assets/solarTraining.png";
import training from "../../assets/training.png";
import cctvTraining from "../../assets/solartrainingAd.png";

export const servicesPageData = {
  solarinstallations: {
    id: 1,
    title: "solar installation and maintenance",
    routeName: "solarinstallations",
    backgroundImage: `${solar}`,
    info: ` Our comprehensive solar services encompass tailored solutions for residences, businesses, and industries, ensuring energy efficiency, cost savings, and environmental benefits. From initial consultation to seamless installation, our experts guide clients through the solar journey. Moreover, our dedicated maintenance ensures long-term system performance, including routine checkups, real-time monitoring, and responsive support, guaranteeing continued efficiency and peace of mind.`,
    services: [
      "solar installation",
      "sales of solar material/gadgets",
      "solar maintenance",
      "solar installaion trainings",
    ],
    photoGallery: [
      solarr,
      floodLight,
      charger,
      solar1,
      training,
      solar2,
      solarTraining,
      solarBattery,
    ],
  },
  CCTVinstallations: {
    id: 2,
    title: "CCTV camera  installation",
    backgroundImage: `${cctv}`,
    routeName: "CCTVinstallations",
    info: ` Our CCTV camera installation service offers enhanced security for homes and businesses. We provide expert consultation, strategically positioning high-quality cameras to cover critical areas. Our professionals ensure seamless installation, integrating cutting-edge technology for real-time monitoring. With a focus on deterring potential threats and safeguarding assets, our CCTV solutions offer peace of mind and proactive security management.`,
    services: [
      "CCTV camera installation",
      "sales of CCTV cameras",
      "CCTV camera maintenance",
      "CCTV camera installaion trainings",
    ],
    photoGallery: [
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      cctvAd,
      cctvTraining,
      "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      "https://i.ibb.co/RjBLWxB/grey-brim.png",
    ],
  },
  generalhousewiring: {
    id: 3,
    title: "general house wiring",
    backgroundImage: `${electrical}`,
    routeName: "generalhousewiring",
    info: ` Our comprehensive house wiring service covers both surface and conduit installations, tailored to your preferences. For a clean and modern look, our surface wiring solutions ensure seamless integration of electrical systems without invasive modifications. Alternatively, our conduit wiring offers enhanced protection, concealing wires within durable conduits for safety and aesthetics. With our expertise, your home will boast efficient, safe, and visually appealing electrical installations that meet your unique needs.`,
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
    backgroundImage: `${partnership}`,
    routeName: "partnership",
    info: ` Collaborating with us means joining forces for mutual growth. We value partnerships that harness our expertise and resources to achieve shared goals. Whether you're a business seeking innovative solutions or an organization aiming to make a difference, our partnership approach emphasizes open communication, resource synergy, and collective success. Together, we unlock opportunities, drive innovation, and create lasting positive impacts.`,
    services: ["general partnership", "assistance and aids"],
    photoGallery: [
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    ],
  },
};
