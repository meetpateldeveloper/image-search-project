import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import getPictureApi from "./api";
import { useState } from "react";

function App() {
  const [resultArray, setResultArray] = useState([]);
  const handleSubmit = async (userInput) => {
    setResultArray(await getPictureApi(userInput));
  };
  return (
    <div className="body">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList resultArray={resultArray} />
    </div>
  );
}

export default App;
