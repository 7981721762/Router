function User(props){

  console.log("user List-->",props.UserList);
    return(
    
      <div>
      
        <table border={2}>
        <h1> USER LIST</h1>
        <tr>
           <td>Id</td>
            <td>Role</td>
            <td>Name</td>
            <td>Mobile</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
    
          {props.UserList.map((user,i) => 
            (
              <tr>
                <td>{user.Id}</td>
                <td>{user.Role}</td>
                <td>{user.Name}</td>
                <td>{user.Mobile}</td>
                <td>{user.Email}</td>
                <td>{user.Edit}</td>
              </tr>
            )
          )}
    
    
    
          </table>
         </div>
    );
            }
       export default User;
    
