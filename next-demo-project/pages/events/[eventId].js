import React, {Fragment} from 'react';
import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistic from "../../components/event-detail/EventLogistic";
import EventContent from "../../components/event-detail/EventContent";

const EventDetailPage = () => {

    const router = useRouter();
    const id = router.query.eventId;

    const event = getEventById(id);

    if (!event) return <p>No event found</p>;

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistic
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
};

export default EventDetailPage;
