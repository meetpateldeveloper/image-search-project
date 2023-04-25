import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ resultArray }) {
  let imageLink = [];
  imageLink = resultArray.map((value) => (
    <ImageShow url={value.urls.small} desc={value.alt_description} />
  ));
  console.log(imageLink);

  return <div className="image-list">{imageLink}</div>;
}

export default ImageList;
