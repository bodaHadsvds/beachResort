import React from "react";
import { Room } from "../room";

export const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        unfortunately no rooms matched your search parameters
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="room-list-center">
        {rooms.map((room, i) => (
          <Room key={i} room={room}></Room>
        ))}
      </div>
    </section>
  );
};
