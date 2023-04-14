export default function ListItem(props) {
  return (
    <fieldset className="ListItem">
      <p>{props.task}</p>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </fieldset>
  );
}
