import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col items-center justify-center">
          <div className="w-4/5">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
