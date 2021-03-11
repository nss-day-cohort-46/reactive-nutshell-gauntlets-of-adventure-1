
// import React, { useContext, useEffect } from "react";
// import { UserContext } from "./userProvider";
// import { UserCard } from "./userCard";


// export const UserList = () => {
//   // This state changes when `getusers()` is invoked below
//   const { users, getUsers } = useContext(UserContext);
    
//   //useEffect - reach out to the world for something
//   useEffect(() => {
//     console.log("UserList: useEffect - getUsers");
//     getUsers();
//   }, []);

//   return (
//     <>
//       <div className="users">
          
//         {console.log("UserList: Render", users)}
//         {users.map((user) => {
//           return <UserCard key={user.id} userProps={user} />;
//         })}
//       </div>
//     </>
//   );
// };