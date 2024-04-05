import { GradientTitle } from "../GradientTitle/GradientTitle";
import { Slider } from "../Slider/Slider";
import photo_1 from "../../../assets/staff/person-1.png";
import photo_2 from "../../../assets/staff/person-2.png";
import photo_3 from "../../../assets/staff/person-3.png";
import photo_4 from "../../../assets/staff/person-4.png";
import photo_5 from "../../../assets/staff/person-5.png";
import photo_6 from "../../../assets/staff/person-6.png";

import "./Content.css";

const sliderData = [
  {
    label: "CEO AND COFOUNDER, JeTrix",
    title: "James Anderson",
    img: photo_1,
  },
  {
    label: "Front-End Developer",
    title: "David Williams",
    img: photo_2,
  },
  {
    label: "UI/UX Designer",
    title: "Anh Nguyen",
    img: photo_3,
  },
  {
    label: "Back-End Developer",
    title: "Luca Rossi",
    img: photo_4,
  },
  {
    label: "Back-End Developer",
    title: "Daniel Martinez",
    img: photo_5,
  },
  {
    label: "DevOps Engineer ",
    title: 'Matteo Marco',
    img: photo_6,
  },
];

const Content = () => (
  <div className="content">
    <GradientTitle>Meet our Team</GradientTitle>
    <div className="content__grid">
      <p>
        Get Acquainted with Our Team of Full Stack Developers Who Bring Your Web
        Applications to Life, from Conceptualization Through to Deployment and
        Beyond.
      </p>
    </div>
    <Slider data={sliderData} />
  </div>
);
export default Content;
