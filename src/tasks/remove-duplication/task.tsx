// Задача: убери дублирование, сделай код расширяемым и читаемым

function Actions() {
  return (
    <div>
      <button onClick={() => alert('Saved')}>Save</button>
      <button onClick={() => alert('Deleted')}>Delete</button>
      <button onClick={() => alert('Canceled')}>Cancel</button>
    </div>
  )
}
