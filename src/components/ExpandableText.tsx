interface props {
  children: string;
  maxChar?: number;
  expanded: boolean;
}

const ExpandableText = ({ maxChar, children, expanded }: props) => {
  return (
    <div>{expanded ? children : children.substring(0, maxChar) + "..."}</div>
  );
};

export default ExpandableText;
