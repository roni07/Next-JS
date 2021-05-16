import React from 'react';
import styles from './EventItem.module.css';
import Button from "../ui/Button";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

const EventItem = (props) => {

    const {title, image, date, location, id} = props;

    const dateFormat = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const addressFormat = location.replace(',', '\n');

    const exploreLink = `/events/${id}`;

    return (
        <li className={styles.item}>
            <img src={"/" + image} alt="alt"/>
            <div className={styles.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon/>
                        <time>{dateFormat}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <address>{addressFormat}</address>
                    </div>
                </div>

                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
