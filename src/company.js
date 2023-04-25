function Company(props){

    console.log("companyList-->",props.CompanyList);
      return(
    <div>
        
          <table border={1}>
          <h1> COMPANY LIST</h1>
          <tr>
             <td>Id</td>
             <td>Name</td>
             <td>Employee</td>
               </tr>
              {props.companyList.map((company,i) => 
              (
                <tr>
                  <td>{company.Id}</td>
                 <td>{company.Name}</td>
                 <td>{company.Employe}</td>
                  
                </tr>
              )
            )}
          </table>
           </div>
           );
              }
            export default Company;
      
  