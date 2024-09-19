import { useState } from "react";

function Task() {
  const [title, setTile] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();

  const [taskList, setTaskList] = useState([]);

  function onSubmitDetails(event) {
    console.log(event);
  }

  return (
    <div className="main-container">
      <h1>Task Manager</h1>
      <div className="sub-container">
        <form onSubmit={onSubmitDetails()}>
          <div className="input-container">
            <label>Title</label>
            <input value={title} type="text" placeholder="Enter Your Title " />
          </div>

          <div className="input-container">
            <label>Description</label>
            <input
              value={description}
              type="text"
              placeholder="Enter Your Description"
              autoFocus
            />
          </div>

          <div className="input-container">
            <label>Due Date</label>
            <input value={date} type="date" autoFocus />
          </div>
          <div className="submit-btn-con">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Task;

// export default function App() {
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     );
//   }
