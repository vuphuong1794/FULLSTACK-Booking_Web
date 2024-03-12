import "./List2.css";
import Navbar from "../../../components/navbar/Navbar";
import Header from "../../../components/header/Header";
import SearchItem from "../../../components/searchItem/SearchItem";
import useFetch from "../../../Hooks/useFetch";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const List = () => {
  
  const location = useLocation();
  const [selectType, setSelectType] = useState(location.state.selectType);

  const { data, loading, error, reFetch } = useFetch(
    `https://mern-booking-web.onrender.com/api/hotels?type=${selectType}`
  );
  console.log(data);

  const handleClicked = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
          <div className="listResult">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <div className="test" key={item._id}>{item.title}</div>
                ))}
              </>
            )}
          </div>
        </div>
  );
};

export default List;
