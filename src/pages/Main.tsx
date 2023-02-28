import Container from "../components/UI/Container";
import Card from "../components/UI/Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { options } from "../utils/splideOptions";

import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import Loader from "../components/UI/Loader";

const Main = () => {
  const slides = [
    {
      image: image1,
      title: "Random Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.",
    },
    {
      image: image2,
      title: "Random Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.",
    },
    {
      image: image3,
      title: "Random Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.",
    },
    {
      image: image4,
      title: "Random Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.",
    },
    {
      image: image5,
      title: "Random Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.",
    },
  ];
  return (
    <Container>
      <Splide options={options} aria-label="My Favorite Images">
        {slides.map((slide, index) => {
          return (
            <SplideSlide key={index}>
              <Card
                img={slide.image}
                title={slide.title}
                description={slide.description}
              ></Card>
            </SplideSlide>
          );
        })}
      </Splide>
      <Loader />
      <h1>Other shit in here</h1>
    </Container>
  );
};

export default Main;
