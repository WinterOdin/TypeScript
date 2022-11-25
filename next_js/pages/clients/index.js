import Link from 'next/link';

function ClientsHomePage(){

    const clients_arr = [
        { id: "test user", name: "Test" },
        { id: "test user2", name: "Test2" }
    ]

    return (
        <div>
            <div><h1>Clients Home Page</h1></div>
            <div>
                <ul>
                    {clients_arr.map((client) => (
                        <li key={client.id}>
                            <Link href={`/clients/${client.id}`}>{client.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default ClientsHomePage;