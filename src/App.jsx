import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="container h-screen">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col items-center justify-center">
          <div className="w-4/5">
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
