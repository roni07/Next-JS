import React from 'react';
import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import {useRouter} from "next/router";

const EventsPage = () => {

    const router = useRouter();
    const events = getAllEvents();

    const findEvent = (year, month) => {
     const fullPath = `events/${year}/${month}`

        router.push(fullPath);
    }

    return (
        <div>
            <EventsSearch onSearch={findEvent}/>
            <EventList items={events}/>
        </div>
    );
};

export default EventsPage;
