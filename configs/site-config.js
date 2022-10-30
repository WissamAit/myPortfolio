import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  
  author: {
    name: "Wissam AIT KHEDDACHE",
    accounts: [
      {
        url: "https://github.com/WissamAit",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://dev.to/wissamAit",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/wissam-ait",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:aitkheddachewissam@gmail.com",
        label: "Mail Wissam",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
