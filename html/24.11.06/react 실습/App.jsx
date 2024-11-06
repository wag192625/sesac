import PackingList from "./PackingList";
import Login from "./page/Login";
import Login1 from "./page/Login1";
import Page from "./page/Page";
import OtherPage from "./page/OtherPage";

function App() {
  return (
    // <PackingList></PackingList>
    // <Login1 isLogged={true}></Login1>;
    // return <Login></Login>;
    <Page userType={"admin"}></Page>
    // <OtherPage></OtherPage>
  );
}

export default App;
