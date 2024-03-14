import Cards from "./Cards";

export default function Button() {
  return (
    <div className="App">
      <h1>Match two</h1>
      <button onClick={Cards()}>New game</button>
    </div>
  );
}
