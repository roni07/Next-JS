import React from 'react';
import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/EventList";

const FilteredEventsPage = () => {

    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return <p>Loading...</p>
    }

    const filterYear = filterData[0];
    const filterMont = filterData[1];

    const numYear =+ filterYear;
    const numMonth =+ filterMont;

    if (isNaN(numYear) || isNaN(numMonth)) return <p>Invalid search value</p>

    const filteredEvents = getFilteredEvents({year: numYear, month: numMonth})

    if (!filteredEvents || filteredEvents.length === 0) return <p>No events found by input search value</p>

    return (
        <div>
            <EventList items={filteredEvents}/>
        </div>
    );
};

export default FilteredEventsPage;
