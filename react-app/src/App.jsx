import ReactCard from "./components/ReactCard";

function App() {
  return (
    <div className="container">
      <p>React Container</p>
      <ReactCard pName="Yash" pEmail="yash@d.c" pPhone={12344} />
    </div>
  );
}

export default App;
