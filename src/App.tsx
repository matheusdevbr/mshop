import { api } from "./services/api";

export function App() {

  api.get('produtos')
  .then((response) => {console.log(response.data)})
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}
