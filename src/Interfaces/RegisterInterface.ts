type role="ORGANIZATION ADMIN"|"USER"|"CANTEEN ADMIN";

interface Iregister{
    fname:string;
    mnname?:string;
    lname:string;
    email:string;
    password:string;
    role:role;
}

export default Iregister;