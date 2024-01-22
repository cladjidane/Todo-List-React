function Task({item}) {
  return (
    <li>
      <input defaultChecked={item.completed} type="checkbox" />
      <span>[{item.id}] {item.todo}</span>
      { !item.completed && <button>X</button>}
    </li>
  );
}

export default Task;
