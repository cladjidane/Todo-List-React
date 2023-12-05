function Task({taskName}) {
  return (
    <li>
      <input type="checkbox" />
      <span>{taskName}</span>
      <button>X</button>
    </li>
  );
}

export default Task;
