import { useState } from "react";
import Button from "./components/Button";
import ExpandableText from "./components/ExpandableText";

const App = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <ExpandableText maxChar={10} expanded={expanded}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        adipisci suscipit placeat est, ratione modi itaque deleniti repudiandae
        optio totam nam tempora alias quod sed repellat velit vel vero ullam
        possimus ut autem id saepe. Incidunt est error sunt quos corrupti
        officia. Minus id maxime ullam tenetur ducimus necessitatibus nesciunt
        laborum accusantium, commodi ex. Ad veniam, fuga voluptatem assumenda
        eaque rerum nulla quas voluptates numquam saepe sint, nesciunt enim
        ducimus soluta blanditiis velit cupiditate? Cupiditate voluptate debitis
        animi aperiam eum inventore repudiandae quaerat esse molestias aliquid
        minima ipsum, harum illum nemo dolor reprehenderit tempora atque ullam
        enim culpa fugit. Deleniti!
      </ExpandableText>
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Less" : "More"}
      </Button>
    </div>
  );
};

export default App;
