import "./imageWrapper.scss";

const ImageWrapper = ({ imgUrl, alt }: { imgUrl: string; alt: string }) => {
  return (
    <div className="img-wrapper">
      <img src={"../assets/img/" + imgUrl} alt={alt} />
    </div>
  );
};
export default ImageWrapper;
