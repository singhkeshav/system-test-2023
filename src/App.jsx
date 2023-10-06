import React from "react";
import AddGroceryItem  from './add_grocery.jsx';
import GroceryList  from './grocery_list.jsx';
const App = () => {
  let [reload, setReload] = React.useState(false);
  return <div className="container mt-5 ml-5 row ">
    <div className="col-6">  <AddGroceryItem cb={setReload} /></div>
    <div className="col-6">  <GroceryList  reload={reload}/></div>


  </div>
};
export default App;