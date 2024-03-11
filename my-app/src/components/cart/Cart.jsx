import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookedRooms = ({ userId }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookedRooms = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/users/65a62cb4aec8d3e3257645c2", {withCredentials: true});
        setRooms(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching booked rooms:', error);
        setLoading(false);
      }
    };

    fetchBookedRooms();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (rooms.length === 0) {
    return <div>No booked rooms found.</div>;
  }

  return (
    <div>
      <h2>Booked Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            <h3>{room.title}</h3>
            <p>Price: {room.price}</p>
            <p>Max People: {room.maxPeople}</p>
            <p>Description: {room.desc}</p>
            <p>Room Numbers:</p>
            <ul>
              {room.roomNumbers.map((roomNumber) => (
                <li key={roomNumber.number}>
                  Number: {roomNumber.number}
                  {roomNumber.bookedBy && (
                    <span> - Booked by: {roomNumber.bookedBy.name}</span>
                  )}
                  <p>Unavailable Dates:</p>
                  <ul>
                    {roomNumber.unavailableDates.map((date, index) => (
                      <li key={index}>{date.toLocaleDateString()}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookedRooms;