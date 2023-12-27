import Panel from "./components/Panel";

function App() {
  return (
    <>
      <div className="App ">
        <div
          className="container text-center shadow-lg-li rounded"
          style={{ width: 320, padding: 0 }}
        >
          <div className="grid bg-secondary py-2 px-4 borderOutSide m-0">
            <Panel />
          </div>
        </div>
      </div>
     
    </>
  );
}

export default App;
