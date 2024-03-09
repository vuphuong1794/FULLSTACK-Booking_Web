import "./List2.css";
import Navbar from "../../../components/navbar/Navbar";
import Header from "../../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../../components/searchItem/SearchItem";
import useFetch from "../../../Hooks/useFetch";

const List = () => {
  /*
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined)
  const handleChange = (e) =>{
    setDestination(e.target.value)
  }
*/
  const { data, loading, error, reFetch } = useFetch(
    "https://mern-booking-web.onrender.com/api/hotels?city=baria"
  );

  const handleClicked = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header  />
      
          <div className="listResult">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
  );
};

export default List;
