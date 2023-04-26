import ListItem from "./ListItem";

export default function List(props) {
  return (
    <section className="List">
      <ul>
        {props.tasks.map(tasks => (
          <ListItem completeTask={props.completeTask} {...tasks} />
        ))}
      </ul>
    </section>
  );
}
