
export const UserList = ({user}) => {
    return (
        <div className="userList">
      {user.map((el) => (
         <div key={el.id}>
         <div className="page-content page-container" id="page-content" >
         <div className="padding">
           <div className="row container d-flex justify-content-center">
             <div className="col-xl-6 col-md-12">
               <div className="card user-card-full">
                 <div className="row m-l-0 m-r-0" className="card">
                   <div className="col-sm-4 bg-c-lite-green user-profile">
                     <div className="card-block text-center text-white">
                       <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> </div>
                       <h4 className="f-w-600">{el.name} </h4>
                       <h6>{el.username}</h6> 
                       <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                     </div>
                   </div>
                   <div className="col-sm-8">
                     <div className="card-block">
                       <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                       <div className="row">
                         <div className="col-sm-6">
                           <p className="m-b-10 f-w-600">Email</p>
                           <h6 className="text-muted f-w-400">{el.email}</h6>
                         </div>
                         <div className="col-sm-6">
                           <p className="m-b-10 f-w-600">Phone</p>
                           <h6 className="text-muted f-w-400">{el.phone}</h6>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-sm-6">
                           <p className="m-b-10 f-w-600">Address</p>
                           <h6 className="text-muted f-w-400">{el.address.city},{el.address.street},{el.address.zipcode}</h6>
                         </div>
                         <div className="col-sm-6">
                           <p className="m-b-10 f-w-600">Company</p>
                           <h6 className="text-muted f-w-400">{el.company.bs},{el.company.name}</h6>
                         </div>
                       </div>
                       <ul className="social-link list-unstyled m-t-40 m-b-10">
                         <li><a href="#!" data-toggle="tooltip" data-placement="bottom"  data-abc="true">{el.website}</a></li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

          </div>
))}
          
    </div>
    )
}

export default UserList;