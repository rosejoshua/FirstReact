import React from "react";
import EventListItem from "./eventListItem";

export default function EventList({events}) {
  return (
    <>
      {events.map(event => (
        <EventListItem event={event} key={event.id}/>
      ))}
    </>
  );
}
