import { useEffect, useState } from "react";
import useSWR from "swr";


function LastSale(props){

    const [sales, setSales] = useState(props.data);
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data, err} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)




    if(err){
        return <p>Failed to load</p>
    }

    if(!data){
        return <p>Loading</p>
    }
    
    
    return (
        <ul>
            {data.map((sale) => (
                <li key={sale.id}>
                    {sale.name}
                    &nbsp;
                    {sale.website}
                </li>
            ))}
        </ul>
    )


}

export async function getStaticProps(){
    return fetch('https://jsonplaceholder.typicode.com/users'
    ).then((response) => response.json())
    .then((data) => {

        const salesData = [];

        for (const key in data ){
            salesData.push({
                id:key,
                username: data[key].username,
                website: data[key].website,
                
            });
            
        }

        return { props: {sales: salesData}, revalidate: 10};
    });
}

export default LastSale;