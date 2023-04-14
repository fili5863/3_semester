export default function Form(props) {
  function submit(e) {
    e.preventDefault();
    console.log(e.target.elements.task.value);
    props.addTask(e.target.elements.task.value);
  }
  return (
    <form onSubmit={submit}>
      <legend>Form</legend>
      <input required type="text" name="task" id="form_task" />
      <button>Add Task</button>
    </form>
  );
}
