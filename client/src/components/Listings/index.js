import axios from "axios";
import { useEffect, useState } from "react";

import ProductClipping from "./ProductClipping";
import styles from "./index.module.css";

export default function Listings() {
  const limit = 20;
  const [listings, setListings] = useState([]);
  const [skip, setSkip] = useState(0);
  const [] = useState([]);

  function getListings() {
    axios.get(`/api/listings?skip=${skip}&limit=${limit}`).then((response) => {
      setListings(response.data);
    });
  }

  const handleGetNextSet = () => {
    setSkip(skip + limit);
  };

  const handleGetPreviousSet = () => {
    const newSkip = skip - limit;
    if (newSkip <= 0) {
      setSkip(0);
    } else {
      setSkip(newSkip);
    }
  };

  useEffect(() => {
    getListings();
  }, [skip]);

  return (
    <>
      <p className={styles.counter}>
        Displaying listings {skip} to {skip + limit}
      </p>
      <ul>
        <li>
          <button onClick={handleGetPreviousSet}>👈</button>
        </li>
        <li>
          <button onClick={handleGetNextSet}>👉</button>
        </li>
      </ul>
      <div className={styles.container}>
        {listings.map((listing) => (
          <ProductClipping {...listing} />
        ))}
      </div>
    </>
  );
}
