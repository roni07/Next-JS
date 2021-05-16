import React from 'react';
import EventItem from "./EventItem";

import styles from "./EvenList.module.css";

const EventList = (props) => {

    const {items} = props;

    return (
        <ul autoCapitalize={styles.list}>
            {items.map(event => <EventItem
                key={event.id}
                id={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                image={event.image}
            />)}
        </ul>
    );
};

export default EventList;
