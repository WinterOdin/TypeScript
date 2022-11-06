interface DataService {
    getData(): unknown;
}

let service: DataService;

const response = service.getData();

//if we do response.a.b.c
//we are getting error 
//that signals dev to not use that var 

if(typeof response === "string" ){
    console.log(response.toLocaleLowerCase());
}
