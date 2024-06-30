import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const cities = ["Boisie", "Sacramento", "Los Angeles"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={cities}
        heading="List"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClick={() => setAlertVisible(false)}>
          some important message...
        </Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Click me!</Button>
    </div>
  );
};

export default App;
