import { useEffect, useState } from "react";

function LastSale(){
    const [sales, setSales] = useState();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('https://next-js-9d1ee-default-rtdb.europe-west1.firebasedatabase.app/sales.json'
        ).then((resp) => resp.json)
        .then((data) => {

            const salesData = [];

            for( const key in data ){
                salesData.push({
                    id:key,
                    username: data[key].username,
                    volume: data[key].volume,
                    
                });
                
            }

            setSales(salesData);
            setIsLoading(false)
        }).catch((err) =>{
            console.log(err.message)
        });
    }, []);

    if(isLoading){
        return <p>Loading</p>
    }
    if(!sales){
        return <p>No data</p>
    }
    
    return (
        <ul>
            {sales.map((sale) =>(
                <li key={sale.id}>
                    {sale.username}
                </li>
            ))}
            
        </ul>
    )


}

export default LastSale;