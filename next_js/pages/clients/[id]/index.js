import Link from 'next/link';
import { useRouter } from "next/router"

function ClientsPortfolioPage(){

    const router = useRouter();

    function loadData(){
        router.push({
            pathname: '/clients/[id]/[clientprojects]',
            query: {id:"test", clientprojects: "project"}
        });
    }

    return (
        <div>
            <div><h1>The Projects of Given Client</h1></div>
            <div>
                <button onClick={loadData}>
                    Load Project A
                </button>
            </div>
        </div>
        
    );
}

export default ClientsPortfolioPage;