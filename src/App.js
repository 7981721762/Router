
import User from './user.js';
import Product from './product.js';
import Company from './company.js';
import Role from './role.js';
import Sidebar from './sidebar.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){

    var user= [{
        Id:101,
        Role:'Manager',
        Name:'surya',
        Mobile:9000002220,
        Email:'surya@gmail.com'
    },
{
        Id:102,
        Role:' Asst.Manager',
        Name:'ajith',
        Mobile:9000002221,
        Email:'ajith@gmail.com'
    },
    {
        Id:103,
        Role:'TL',
        Name:'vijay',
        Mobile:9000002222,
        Email:'vijay@gmail.com'
    },
    {
        Id:104,
        Role:'ios developer',
        Name:'arun',
        Mobile:9000002223,
        Email:'arun@gmail.com'
    
    },
    {
        Id:105,
        Role:'android developer',
        Name:'rahul',
        Mobile:9000002224,
        Email:'rahul@gmail.com'
    },
    {
        Id:106,
        Role:'reactjs',
        Name:'virat',
        Mobile:9000002225,
        Email:'virat@gmail.com'
    },
    {
        Id:107,
        Role:'java developer',
        Name:'dhoni',
        Mobile:9000002226,
        Email:'dhoni@gmail.com'
    },
    {
        Id:108,
        Role:'testing',
        Name:'siva',
        Mobile:9000002227,
        Email:'siva@gmail.com'
    },
    {
        Id:109,
        Role:'testing',
        Name:'vijay',
        Mobile:9000002228,
        Email:'vijay@gmail.com'
    },
    {
        Id:110,
        Role:'Admin',
        Name:'karthi',
        Mobile:9000002229,
        Email:'karthi@gmail.com'
    }

    ]

    var product= [{
        Id:101,
        Name:'bottle',

      
    },


{
    Id:102,
    Name:'Laptop',
    
},
    ]

    var company= [{
        Id:101,
        Name:'capgimini',
        Employee:'soujanya',
    },
]

var role= [{
    Id:12334,
    Name:'dresses',
    Action:'delivred/undeliverd',
},
]






    console.log("user List",user);
    console.log("product List",Product);
    console.log("company List",company);
    console.log("Role List",role);
    console.log("Sidebar",Sidebar);
    
  return(
    <div>
      <User UserList={user} />
     <Product ProductList={product}/>
     <Company CompanyList={company}/>
     <Role   RoleList={role}/>
    </div>
      );
      }
    export default App;