/* eslint-disable react/prop-types */


export default function Pagination({page,setpage,totalData}) {

  const totalpage = Math.ceil(totalData / 8)  
  
  return (
    <tfoot>
      <tr>
        <th colSpan={4}>
         <div className="flex justify-center" > 
         <div className="join ">
         <button onClick={()=>setpage(old=>old-1)} disabled={page < 2} className="join-item btn  text-white hover:bg-blue-950 bg-red-600">«</button>           
         {[...Array(totalpage).keys()].map(ele=>{
          return  <button key={ele*3} onClick={()=>setpage(ele+1)} className={`join-item hover:bg-blue-950 ${page === ele + 1 ? "bg-yellow-500" : "bg-red-600"} text-white btn `}>{ele+1}</button>          
         })}
         <button onClick={()=>setpage(old=>old+1)} disabled={page === totalpage} className="join-item btn  text-white hover:bg-blue-950 bg-red-600">»</button>
         </div>
         </div>          
        </th>
      </tr>
    </tfoot>
  );
}
