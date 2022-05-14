type role="ORGANIZATION ADMIN"|"USER"|"CANTEEN ADMIN";

interface Iregister{
    name:string;
    // mname?:string;
    // lname:string;
    email:string;
    password:string;
    role:string;
    org_id:number;
}

export default Iregister;