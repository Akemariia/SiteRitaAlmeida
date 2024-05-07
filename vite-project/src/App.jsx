import Texto_FAQ from "./Texto_FAQ";
import Acordeon_FAQ from "./Acordeon_FAQ";

function App() {
  return (
    <>
      <div class="flex flex-col items-center py-[98px] container mx-auto max-w-screen-lg bg-red-400 ">
        <Texto_FAQ />
        <Acordeon_FAQ />
        <div class="pt-[60px] flex justify-center bg-blue-800">
          texto com link
        </div>
      </div>
    </>
  );
}

export default App;
