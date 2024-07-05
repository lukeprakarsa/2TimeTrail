import DetailedListGroup from "./components/DetailedListGroup";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const App = () => {
  const sidebarStyle = {
    height: "100vh",
    backgroundColor: "#f8f9fa", // Optional: change the background color
    padding: 0,
  };
  return (
    <>
      <div className="container-fluid text-center navbar-expand-lg">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-md-auto" style={sidebarStyle}>
            <SideBar />
          </div>
          <div className="col">
            <DetailedListGroup />
          </div>
          <div className="col">
            <DetailedListGroup />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
