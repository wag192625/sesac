import AdminPage from "./AdminPage";
import UserPage from "./UserPage";
import ManegerPage from "./ManegerPage";

function Type({ userType }) {
  if (userType === "admin") {
    return <AdminPage></AdminPage>;
  } else if (userType === "maneger") {
    return <ManegerPage></ManegerPage>;
  } else {
    return <UserPage></UserPage>;
  }

  // return userType === "admin" ? <AdminPage /> : <UserPage />;
}
export default function Page() {
  return (
    <>
      <h3>나의 앱</h3>
      <Type userType={"maneger"} />
    </>
  );
}
