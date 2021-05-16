import React from 'react';
import {useRouter} from "next/router";

const ClientDetailsPage = () => {

    const router = useRouter();

    const btnClick = () => {
        router.back();
    }

    return (
        <div>
            <h1>client details page</h1>
            <p>Client Id: {router.query.id}</p>
            <button onClick={btnClick}>Back</button>
        </div>
    );
};

export default ClientDetailsPage;
