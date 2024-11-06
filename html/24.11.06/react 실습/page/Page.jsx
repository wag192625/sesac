import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

// function Type({ userType }) {
// if (userType === "admin") {
//   return <AdminPage></AdminPage>;
// } else {
//   return <UserPage></UserPage>;
// }

//   return userType === "admin" ? <AdminPage /> : <UserPage />;
// }

export default function Page({ userType }) {
  return (
    <>
      <h1>나의 앱</h1>
      {userType === "admin" ? <AdminPage /> : <UserPage />}
    </>
  );
  // return (
  //   <>
  //     <h3>나의 앱</h3>
  //     <Type userType={"admin"} />
  //   </>
}

// export default function Page() {
//   const isAdmin = true;

//   return (
//     <>
//       <div>나의 앱</div>
//       {isAdmin ? <AdminPage></AdminPage> : <UserPage></UserPage>}
//     </>
//   );
// }
