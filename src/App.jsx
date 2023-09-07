import Counter from "./Counter";

export default function App() {
  return (
    <>
      <Counter />
      <Counter initialValue={12} step={5} />
      <Counter initialValue={15} />
    </>
  );
}
