import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


const awscertification = "/CertImages/aws-workshop-certification.png";
const powerBi = "/CertImages/powerbi.png";
const ethicalHacking = "/CertImages/ethicalhacking.png";
const bootstrapFlexbox = "/CertImages/bootstrap-flexbox.jpg";
const developerFoundation = "/CertImages/developerfoundation.jpg";
const flexbox = "/CertImages/flexbox.jpg";
const htmlCssBootstrap = "/CertImages/html-css-bootstrap.jpg";
const javascript = "/CertImages/javascript.jpg";
const nodeJs = "/CertImages/nodejs.jpg";
const python = "/CertImages/python.jpg";
const sql = "/CertImages/sql.jpg";
const xpmFundamentals = "/CertImages/xpmfundamentals.jpg";



const skillsCertificates = [
  {
    certificateId: "87YXHD328O",
    certificateImageUrl: awscertification,
    certificateUrl: "https://certificates.ccbp.in/intensive/irc?id=72JTWJ9IGW",
  },
  {
    certificateId: "EWLPCJHMJF",
    certificateImageUrl: developerFoundation,
    certificateUrl:
      "https://drive.google.com/file/d/1RtZgA9m0P8ZDGyTkDUUxhYHbUVAl_Irn/view?usp=sharing",
  },
  {
    certificateId: "BJGGKXHKES",
    certificateImageUrl: nodeJs,
    certificateUrl:
      "https://drive.google.com/file/d/1p1XWSfq9IBlLpfABvSB69kQ1DOuL95jZ/view?usp=sharing",
  },
  {
    certificateId: "OBQSEHGVIK",
    certificateImageUrl: flexbox,
    certificateUrl:
      "https://drive.google.com/file/d/1S9aHgpsUlFIJ081IoIWrQG8Z6cxf4jUg/view?usp=sharing",
  },
  {
    certificateId: "SKMJTLJBML",
    certificateImageUrl: javascript,
    certificateUrl:
      "https://drive.google.com/file/d/1SNLBMOwp9eJDhBNJ4OrYGtooxuYEap3z/view?usp=sharing",
  },
  {
    certificateId: "AVINKDXZNU",
    certificateImageUrl: python,
    certificateUrl:
      "https://drive.google.com/file/d/1SQ9QRSe1EH7VgDzIVl4HO1M6iixI9AvX/view?usp=sharing",
  },
  {
    certificateId: "VFOUSLDMHZ",
    certificateImageUrl: sql,
    certificateUrl:
      "https://drive.google.com/file/d/1SGLsQdoALOSnAo0skO0BliJxlSbYf3w1/view?usp=sharing",
  },
  {
    certificateId: "MLQRNSEPWL",
    certificateImageUrl: xpmFundamentals,
    certificateUrl:
      "https://certificates.ccbp.in/intensive/programming-foundations?id=MLQRNSEPWL",
  },
  {
    certificateId: "ZKKCIDOBPP",
    certificateImageUrl: htmlCssBootstrap,
    certificateUrl:
      "https://drive.google.com/file/d/1SArdlOEV0auiz3qOP5dYZAFm58n33zGh/view?usp=sharing",
  },
  {
    certificateId: "AZMQWWNZIG",
    certificateImageUrl: bootstrapFlexbox,
    certificateUrl:
      "https://drive.google.com/file/d/1SETwUaVx84xE-vE-nmTvzQdHA4Ql8chp/view?usp=sharing",
  },
  {
    certificateId: "9XIFZJLZQM",
    certificateImageUrl: powerBi,
    certificateUrl:
      "https://drive.google.com/file/d/1RwWWDyZT2tExZDE7NVbvnLUvOb6bpeM2/view?usp=sharing",
  },
  {
    certificateId: "1715759668841",
    certificateImageUrl: ethicalHacking,
    certificateUrl:
      "https://drive.google.com/file/d/1WmxYIc8SiWFxk1pOIQmh0NPt9O3pv8Y9/view?usp=sharing",
  },
];

const CertificatesCarousel = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        lazy="true"
        loop={true}
        modules={[Pagination, Navigation, Autoplay, Keyboard]}
      >
        {skillsCertificates.map((certificate) => (
          <SwiperSlide key={certificate.certificateId}>
            <a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={certificate.certificateImageUrl}
                alt="certificate"
                loading="lazy"
                className="w-full aspect-[4/3]"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center w-full -bottom-8">
        <div className="flex items-end justify-between w-full p-2 lg:w-3/4 swiper-buttons">
          <div className="h-full swiper-button-prev after:content-none">
            <FaArrowLeft className="text-white" />
          </div>
          <div className="h-full swiper-pagination"></div>
          <div className="h-full swiper-button-next after:content-none">
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesCarousel;
