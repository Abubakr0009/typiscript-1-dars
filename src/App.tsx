import "./App.css";

function App() {
  // 1-misol
  const name = "Abubakr";
  console.log(name);

  // 2-misol
  const age: number = 25;
  const newAge: number = age * 10;

  console.log(`Yangi yosh: ${newAge}`);

  // 3-misol
  const isDeveloper: boolean = true;

  console.log(isDeveloper);

  // 4-misol
  const favoriteFruits: string[] = ["Olma", "banan", "Apelsin"];

  console.log(favoriteFruits);

  // 5-misol
  const person: { name: string; age: number; student: boolean } = {
    name: "Abubakr",
    age: 15,
    student: true,
  };

  console.log(person); 

  return <></>;
}

export default App;
