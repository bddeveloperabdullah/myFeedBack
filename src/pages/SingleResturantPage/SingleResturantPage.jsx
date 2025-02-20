import Hero from "../../components/SingleResturant/Hero";
import PhotoGallery from "../../components/SingleResturant/PhotoGallery";
import OverAllRating from "../../components/SingleResturant/OverAllRating";
import Review from "../../components/SingleResturant/Review";
import MoreInfo from "../../components/SingleResturant/MoreInfo";

export const SingleResturantPage = () => {
  return (
    <>
      <Hero />
      <PhotoGallery />
      <MoreInfo />
      <OverAllRating />
      <Review />
    </>
  );
};
