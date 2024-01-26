function Task({item, handleUpdate, handleDelete}) {
  return (
    <li>
      <input defaultChecked={item.completed} type="checkbox" 
      onChange={handleUpdate}
      />
      <span>[{item.id}] {item.todo}</span>
      { !item.completed && <button onClick={handleDelete}>X</button>}
    </li>
  );
}

export default Task;
