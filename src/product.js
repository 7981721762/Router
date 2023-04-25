function Product(props){

    console.log("ProductList-->",props.ProductList);
      return(
      <div>
         <table border={1}>
          <h1> PRODUCT LIST</h1>
          <tr>
             <td>Id</td>
             <td>Name</td>
               </tr>
               {props.ProductList.map((product,i) => 
              (
                <tr>
                  <td>{product.Id}</td>
                 <td>{product.Name}</td>
                  
                </tr>
              )
            )}
          </table>
           </div>
            );
              }
          export default Product;
      
  