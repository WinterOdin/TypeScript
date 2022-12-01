import { Fragment } from "react"
import fs from 'fs/promises';
import path from 'path';



function ProductDetailPage(props){

    const {loadedProduct} = props;

    if(!loadedProduct){
        return (
            <Fragment>
                <h1>
                    Loading...
                </h1>
            </Fragment>
        )
    }

    return (

        <Fragment>
            <h1> {loadedProduct.title} </h1>
            <div>
                <p>{loadedProduct.description}</p>

            </div>
        </Fragment>
    )
}

async function getData(){
    

    const filePath = path.join(
        process.cwd(),
        'data',
        'dummy-backend.json');

    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData);

    return data
}

export async function getStaticProps(context){

    const data = await getData();
    const {params} = context;
    const productId = params.id

    const product = data.products.find(product => product.id === productId)

    return {
        props:{
            loadedProduct : product
        },
    }


}   

export async function getStaticPaths(){

    const data = await getData();
    const ids = data.products.map(product => product.id);

    const params = ids.map(id => ({params:{id:id}}));
    return {
        paths:params,
        fallback: true
    }


}



export default ProductDetailPage;