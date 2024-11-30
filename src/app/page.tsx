import ParentComponent from "./components/ParentComponent";
import State from "./components/State";

export default function Home() {
  return (
    <main className="flex flex-col bg-green-400 items-center h-screen justify-center">
      <ParentComponent/>
      <State/>

    </main>
  );
}