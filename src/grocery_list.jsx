import React from 'react'
import {getGroceryList} from './app_service'
export default function grocery_list({reload}) {
    let [list, setList] = React.useState([]);
    let getGroceryItem = async _ =>{
        try{
            let listData=   await getGroceryList().then(res=> res.response);
            if(listData?.length){
                setList(listData)
            }
        } catch(e){
            alert(e?.message)
            console.log(e?.message)
        }
   
    }
    React.useEffect(()=>{
        getGroceryItem()
    },[reload])
  return (
    <div className="container mt-5">
    <h2>Grocery List</h2>
    
    <ul className="list-group">
        {
            list?.length>0 && list?.map((row,index) =>{
                return <li key={index} className="list-group-item d-flex align-items-center">
                <img src={row?.fileUrl || "https://placekitten.com/40/40"} alt={row?.file_name} className="avatar" />
                {
                    row?.itemName
                }
              </li>
            }) 
        }
      
      {
        !list?.length && <h6>Currently you don't have any grocery item!, please add</h6>
      }
   
    </ul>
  </div>
  )
}
