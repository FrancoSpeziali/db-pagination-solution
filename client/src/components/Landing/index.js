import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/listings");
  };

  return (
    <>
      <div className="App">
        <h1>AIRBNB Sample Listings</h1>
        <button type="submit" onClick={handleSearch}>
          Get listings
        </button>
      </div>
    </>
  );
}
