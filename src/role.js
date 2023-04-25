function Role(props){

    console.log("roleList-->",props.RoleList);
      return(
      <div>
       <table border={1}>
          <h1> ROLE LIST</h1>
          <tr>
             <td>Id</td>
             <td>Name</td>
             <td>Action</td>
               </tr>
             {props.roleList.map((role,i) => 
              <tr>
              <td>{role.Id}</td>
                 <td>{role.Name}</td>
                 <td>{role.Action}</td>
                </tr>
               )}
          </table>
           </div>
            );
              }
            export default Role;
      
  