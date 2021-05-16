import React from 'react';
import Link from "next/link";

const ClientPage = () => {

    const clients = [
        {id: 1, name: "Rafi"},
        {id: 2, name: "Alamin"},
        {id: 3, name: "Rakib"},
    ]

    return (
        <div>
            <h1>This is my client page</h1>
            <ul>
                {
                    clients.map(client =>
                        <li key={client.id}>
                            <Link href={{
                                pathname: '/clients/[id]',
                                query: {id: client.id}
                            }}>
                                {client.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default ClientPage;
