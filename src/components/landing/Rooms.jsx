import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'vk193aib',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true
});

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const query = groq`*[_type == "room"]`;
        const fetchedRooms = await client.fetch(query);
        console.log('Retrieved rooms:', fetchedRooms);
        setRooms(fetchedRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Rooms</h1>
      {rooms && rooms.length > 0 ? (
        rooms.map((room) => (
          <div key={room._id}>
            <h2>{room.title}</h2>
            <p>{room.description}</p>
            {room.coverImage && (
              <img
                src={room.coverImage.asset.url}
                alt={room.title}
                width={500}
                height={300}
              />
            )}
          </div>
        ))
      ) : (
        <p>No rooms available.</p>
      )}
    </div>
  );
};

export default Rooms;
