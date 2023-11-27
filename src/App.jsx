import { css } from "@emotion/react";
import logo from "./logo.png";
import {
  CardWrapper,
  ImageWrapper,
  TextWrapper,
  TitleWrapper,
  DescriptionWrapper,
  ActionsWrapper,
  PrimaryButton,
  SecondaryButton,
  LogoSpin,
} from "./styles";

const hotels = [
  {
    id: 1,
    src: "images/hotel-leisure.jpeg",
    alt: "",
    title: "Hotel Leisure",
    description: "Enjoy world-class shopping in the heart of the city.",
  },
  {
    id: 2,
    src: "images/hotel-paradise.jpeg",
    alt: "",
    title: "Hotel Paradise",
    description: "Enjoy open-air spaces, waterfront dining, and poolside fun.",
  },
  {
    id: 3,
    src: "images/hotel-holiday.jpeg",
    alt: "",
    title: "Hotel Holiday",
    description: "Discover your home away from home.",
  },
];

// Apply styling to code within the `App` component's `return` statement using styled components, theming, animation and the `css` prop
function App() {
  return (
    <main
      css={(theme) => ({
        color: theme.colors.primary,
        background: theme.colors.secondary,
        fontFamily: theme.fonts.primary,
      })}
    >
      <img
        src={logo}
        alt=""
        css={ css`
          display: block;
          width: 100px;
          height: 100px;
          margin: 0 auto;
          animation: ${LogoSpin} infinite 10s linear;
        `}
      />
      <div
        css={ css`
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          @media (max-width: 900px) {
            display: grid;
          }
        `}
      >
        {hotels.map((hotel) => {
          return (
            <CardWrapper key={hotel.id}>
              <ImageWrapper src={hotel.src} alt={hotel.alt} />
              <TextWrapper>
                <TitleWrapper>{hotel.title}</TitleWrapper>
                <DescriptionWrapper>{hotel.description}</DescriptionWrapper>
              </TextWrapper>
              <ActionsWrapper>
                <PrimaryButton>Details</PrimaryButton>
                <SecondaryButton>Book</SecondaryButton>
              </ActionsWrapper>
            </CardWrapper>
            );
          })}
      </div>
    </main>
  );
}

export default App;
