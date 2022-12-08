
import Expenses from "./components/Expenses";

function App() {
  let expense = [
    {
      id: "e1",
      title: "groceries",
      amount: 250,
      date: new Date(2022, 4, 20),
    },
    {
      id: "e2",
      title: "books",
      amount: 220,
      date: new Date(2022, 5, 10),
    },
    {
      id: "e3",
      title: "dress",
      amount: 350,
      date: new Date(2022, 6, 12),
    },
    {
      id: "e4",
      title: "travel",
      amount: 400,
      date: new Date(2022, 7, 16),
    },
  ];
  return (
    <div className="app-container">
      <h2>Let's get started</h2>
      <Expenses expense={expense}/>
    </div>
  );
}

export default App;
