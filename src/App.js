// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// import React, {useEffect, useState} from 'react';
// import './App.css';

// function Clock() {
//   const [time, setTime] = useState({
//     seconds: 0,
//     minutes: 0,
//     hours: 0,
//   });

//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       const seconds = now.getSeconds();
//       const minutes = now.getMinutes();
//       const hours = now.getHours() % 12;

//       setTime({
//         seconds: (seconds / 60) * 360,
//         minutes: ((minutes + seconds / 60) / 60) * 360,
//         hours: ((hours + minutes / 60) / 12) * 360,
//       });
//     };
//     updateClock();
//     const intervalId = setInterval(updateClock, 1000);
//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <div className="clock">
//       <div className="number"><span>12</span></div>
//       <div className='number'><span>1</span></div>
//       <div className='number'><span>2</span></div>
//       <div className='number'><span>3</span></div>
//       <div className='number'><span>4</span></div>
//       <div className='number'><span>5</span></div>
//       <div className='number'><span>6</span></div>
//       <div className='number'><span>7</span></div>
//       <div className='number'><span>8</span></div>
//       <div className='number'><span>9</span></div>
//       <div className='number'><span>10</span></div>
//       <div className='number'><span>11</span></div>
//       <div className='hand hour' style={{transform: `translateX(-50%) rotate(${time.hours}deg)`}}></div>
//       <div className='hand minute' style={{transform: `translateX(-50%) rotate(${time.minutes}deg)`}}></div>
//       <div className='hand second' style={{transform: `translateX(-50%) rotate(${time.seconds}deg)`}}></div>
//       <div className='center-point'></div>
//     </div>
//   );

// }
// function App(){
//   return (
//   <div className='App'>
//     <Clock />
//   </div>
//   );
// }

// export default App;










// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


// ChartJS.register(ArcElement, Tooltip, Legend);


// // Clock component
// function Clock() {
//   const [time, setTime] = useState({
//     seconds: 0,
//     minutes: 0,
//     hours: 0,
//   });

//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       const seconds = now.getSeconds();
//       const minutes = now.getMinutes();
//       const hours = now.getHours() % 12;

//       setTime({
//         seconds: (seconds / 60) * 360,
//         minutes: ((minutes + seconds / 60) / 60) * 360,
//         hours: ((hours + minutes / 60) / 12) * 360,
//       });
//     };
//     updateClock();
//     const intervalId = setInterval(updateClock, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="clock">
//       <div className="number"><span>12</span></div>
//       <div className="number"><span>1</span></div>
//       <div className="number"><span>2</span></div>
//       <div className="number"><span>3</span></div>
//       <div className="number"><span>4</span></div>
//       <div className="number"><span>5</span></div>
//       <div className="number"><span>6</span></div>
//       <div className="number"><span>7</span></div>
//       <div className="number"><span>8</span></div>
//       <div className="number"><span>9</span></div>
//       <div className="number"><span>10</span></div>
//       <div className="number"><span>11</span></div>
//       <div className="hand hour" style={{ transform: `translateX(-50%) rotate(${time.hours}deg)` }}></div>
//       <div className="hand minute" style={{ transform: `translateX(-50%) rotate(${time.minutes}deg)` }}></div>
//       <div className="hand second" style={{ transform: `translateX(-50%) rotate(${time.seconds}deg)` }}></div>
//       <div className="center-point"></div>
//     </div>
//   );
// }

// // Moving words component
// function MovingWords() {
//   const words = [
//     "Create your todo list.",
//     "Use a timer to track your time.",
//     "Review your schedule.",
//     "Take breaks between tasks."
//   ];
//   const [currentWord, setCurrentWord] = useState('');
//   const [wordIndex, setWordIndex] = useState(0);
//   const [letterIndex, setLetterIndex] = useState(0);

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       setCurrentWord((prev) => prev + words[wordIndex][letterIndex]);
//       setLetterIndex((prev) => prev + 1);
//     }, 100);

//     if (letterIndex === words[wordIndex].length) {
//       clearInterval(typingInterval);
//       setTimeout(() => {
//         setLetterIndex(0);
//         setCurrentWord('');
//         setWordIndex((prev) => (prev + 1) % words.length);
//       }, 5000);
//     }

//     return () => clearInterval(typingInterval);
//   }, [letterIndex, wordIndex]);

//   return (
//     <div className="moving-words">
//       <h2>Plan your day</h2>
//       <p>{currentWord}</p>
//     </div>
//   );
// }



// // Register Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// function Clipboard() {
//   const [tasks, setTasks] = useState([]);
//   const [taskInput, setTaskInput] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [startTime, setStartTime] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [endTime, setEndTime] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
//   const [showProgress, setShowProgress] = useState(false);
//   const [progressData, setProgressData] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateTaskProgress();
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [tasks]);

//   const updateTaskProgress = () => {
//     const updatedTasks = tasks.map((task) => {
//       const now = new Date();
//       const start = new Date(task.startDateTime);
//       const end = new Date(task.endDateTime);

//       if (now < start) {
//         return { ...task, progress: 0 };
//       } else if (now > end) {
//         return { ...task, progress: 100, completed: true };
//       } else {
//         const totalDuration = end - start;
//         const elapsedDuration = now - start;
//         const progress = (elapsedDuration / totalDuration) * 100;
//         return { ...task, progress };
//       }
//     });

//     setTasks(updatedTasks);
//   };

//   const handleAddTask = () => {
//     setShowModal(true);
//     setCurrentTaskIndex(null);
//     setTaskInput('');
//     setStartDate('');
//     setStartTime('');
//     setEndDate('');
//     setEndTime('');
//   };

//   const handleSaveTask = () => {
//     const startDateTime = new Date(`${startDate}T${startTime}`);
//     const endDateTime = new Date(`${endDate}T${endTime}`);

//     if (startDateTime >= endDateTime) {
//       alert('End time must be after start time.');
//       return;
//     }

//     const newTask = {
//       text: taskInput,
//       startDateTime,
//       endDateTime,
//       progress: 0,
//       completed: false,
//     };

//     if (currentTaskIndex !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[currentTaskIndex] = newTask;
//       setTasks(updatedTasks);
//     } else {
//       setTasks([...tasks, newTask]);
//     }

//     setShowModal(false);
//   };

//   const handleEditTask = (index) => {
//     const task = tasks[index];
//     setCurrentTaskIndex(index);
//     setTaskInput(task.text);
//     setStartDate(task.startDateTime.toISOString().split('T')[0]);
//     setStartTime(task.startDateTime.toISOString().split('T')[1].substr(0, 5));
//     setEndDate(task.endDateTime.toISOString().split('T')[0]);
//     setEndTime(task.endDateTime.toISOString().split('T')[1].substr(0, 5));
//     setShowModal(true);
//   };

//   const handleProgress = (index) => {
//     const task = tasks[index];
//     setProgressData({
//       labels: ['Completed', 'Remaining'],
//       datasets: [
//         {
//           data: [task.progress, 100 - task.progress],
//           backgroundColor: ['#d32f2f', '#8b5a2b'],
//         },
//       ],
//     });
//     setShowProgress(true);
//   };

//   return (
//     <div className="clipboard-container">
//       <button className="add-task-btn" onClick={handleAddTask}>
//         Add Task
//       </button>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>{currentTaskIndex !== null ? 'Edit Task' : 'Add Task'}</h3>
//             <input
//               type="text"
//               placeholder="Task Description"
//               value={taskInput}
//               onChange={(e) => setTaskInput(e.target.value)}
//             />
//             <div>
//               <label>Start:</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//               />
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//               />
//             </div>
//             <div>
//               <label>End:</label>
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//               />
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//               />
//             </div>
//             <button className="save-btn" onClick={handleSaveTask}>
//               Save
//             </button>
//             <button className="cancel-btn" onClick={() => setShowModal(false)}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//       <div className="clipboard">
//         <div className="paper">
//           {tasks.length === 0 ? (
//             <span className="empty-clipboard">
//               Add tasks to your schedule for them to appear on the clipboard.
//             </span>
//           ) : (
//             tasks.map((task, index) => (
//               <div key={index} className="line">
//                 {task.text} - {task.startDateTime.toLocaleString()} to {task.endDateTime.toLocaleString()}
//                 {task.completed ? (
//                   <button className="completed-btn">Completed</button>
//                 ) : (
//                   <>
//                     <button className="edit-btn" onClick={() => handleEditTask(index)}>
//                       Edit
//                     </button>
//                     <button className="progress-btn" onClick={() => handleProgress(index)}>
//                       See Progress
//                     </button>
//                   </>
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       {showProgress && progressData && (
//         <div className="chart-container">
//           <Pie data={progressData} options={{ responsive: true, maintainAspectRatio: false }} />
//         </div>
//       )}
//     </div>
//   );
// }

// // App component
// function App() {
//   return (
//     <div className="App">
//       <div className="left-section">
//         {/* Header buttons */}
//         <div className="header">
//           <button className="sign-in">Sign In</button>
//           <div className="header-right">
//             <button>Use Timer</button>
//             <button>Schedule Tasks</button>
//           </div>
//         </div>
//         {/* Clock */}
//         <Clock />

//         {/* Moving words */}
//         <MovingWords />
//       </div>
      

//       {/* Clipboard */}
//       <Clipboard />
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import './App.css';

// // Clock component
// function Clock() {
//   const [time, setTime] = useState({
//     seconds: 0,
//     minutes: 0,
//     hours: 0,
//   });

//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       const seconds = now.getSeconds();
//       const minutes = now.getMinutes();
//       const hours = now.getHours() % 12;

//       setTime({
//         seconds: (seconds / 60) * 360,
//         minutes: ((minutes + seconds / 60) / 60) * 360,
//         hours: ((hours + minutes / 60) / 12) * 360,
//       });
//     };
//     updateClock();
//     const intervalId = setInterval(updateClock, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="clock">
//       {/* Clock display code */}
//     </div>
//   );
// }

// // Moving words component
// function MovingWords() {
//   const words = [
//     "Create your todo list.",
//     "Use a timer to track your time.",
//     "Review your schedule.",
//     "Take breaks between tasks."
//   ];
//   const [currentWord, setCurrentWord] = useState('');
//   const [wordIndex, setWordIndex] = useState(0);
//   const [letterIndex, setLetterIndex] = useState(0);

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       setCurrentWord((prev) => prev + words[wordIndex][letterIndex]);
//       setLetterIndex((prev) => prev + 1);
//     }, 100);

//     if (letterIndex === words[wordIndex].length) {
//       clearInterval(typingInterval);
//       setTimeout(() => {
//         setLetterIndex(0);
//         setCurrentWord('');
//         setWordIndex((prev) => (prev + 1) % words.length);
//       }, 5000);
//     }

//     return () => clearInterval(typingInterval);
//   }, [letterIndex, wordIndex]);

//   return (
//     <div className="moving-words">
//       <h2>Plan your day</h2>
//       <p>{currentWord}</p>
//     </div>
//   );
// }

// function Clipboard() {
//   const [tasks, setTasks] = useState([]);
//   const [taskInput, setTaskInput] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [startTime, setStartTime] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [endTime, setEndTime] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
//   const [showProgress, setShowProgress] = useState(false);
//   const [progressIndex, setProgressIndex] = useState(0);
//   const [intervalDuration, setIntervalDuration] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (progressIndex < 30) {
//         setProgressIndex(prev => prev + 1);
//       }
//     }, intervalDuration);

//     return () => clearInterval(interval);
//   }, [progressIndex, intervalDuration]);

//   const handleAddTask = () => {
//     setShowModal(true);
//     setCurrentTaskIndex(null);
//     setTaskInput('');
//     setStartDate('');
//     setStartTime('');
//     setEndDate('');
//     setEndTime('');
//   };

//   const handleSaveTask = () => {
//     const startDateTime = new Date(`${startDate}T${startTime}`);
//     const endDateTime = new Date(`${endDate}T${endTime}`);
//     if (startDateTime >= endDateTime) {
//       alert('End time must be after start time.');
//       return;
//     }

//     const durationMinutes = (endDateTime - startDateTime) / 60000;
//     setIntervalDuration((durationMinutes / 30) * 60000); // Duration for each segment in milliseconds

//     const newTask = {
//       text: taskInput,
//       startDateTime,
//       endDateTime,
//       progress: 0,
//       completed: false,
//     };

//     if (currentTaskIndex !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[currentTaskIndex] = newTask;
//       setTasks(updatedTasks);
//     } else {
//       setTasks([...tasks, newTask]);
//     }

//     setShowModal(false);
//   };

//   const handleEditTask = (index) => {
//     const task = tasks[index];
//     setCurrentTaskIndex(index);
//     setTaskInput(task.text);
//     setStartDate(task.startDateTime.toISOString().split('T')[0]);
//     setStartTime(task.startDateTime.toISOString().split('T')[1].substr(0, 5));
//     setEndDate(task.endDateTime.toISOString().split('T')[0]);
//     setEndTime(task.endDateTime.toISOString().split('T')[1].substr(0, 5));
//     setShowModal(true);
//   };

//   const handleProgress = () => {
//     setProgressIndex(0);
//     setShowProgress(true);
//   };

//   return (
//     <div className="clipboard-container">
//       <button className="add-task-btn" onClick={handleAddTask}>
//         Add Task
//       </button>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>{currentTaskIndex !== null ? 'Edit Task' : 'Add Task'}</h3>
//             <input
//               type="text"
//               placeholder="Task Description"
//               value={taskInput}
//               onChange={(e) => setTaskInput(e.target.value)}
//             />
//             <div>
//               <label>Start:</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//               />
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//               />
//             </div>
//             <div>
//               <label>End:</label>
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//               />
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//               />
//             </div>
//             <button className="save-btn" onClick={handleSaveTask}>
//               Save
//             </button>
//             <button className="cancel-btn" onClick={() => setShowModal(false)}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//       <div className="clipboard">
//         <div className="paper">
//           {tasks.length === 0 ? (
//             <span className="empty-clipboard">
//               Add tasks to your schedule for them to appear on the clipboard.
//             </span>
//           ) : (
//             tasks.map((task, index) => (
//               <div key={index} className="line">
//                 {task.text} - {task.startDateTime.toLocaleString()} to {task.endDateTime.toLocaleString()}
//                 {task.completed ? (
//                   <button className="completed-btn">Completed</button>
//                 ) : (
//                   <>
//                     <button className="edit-btn" onClick={() => handleEditTask(index)}>
//                       Edit
//                     </button>
//                     <button className="progress-btn" onClick={handleProgress}>
//                       See Progress
//                     </button>
//                   </>
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       {showProgress && (
//         <div className="circle-progress-container">
//           <svg width="200" height="200" className="circle-progress">
//             <circle cx="100" cy="100" r="90" stroke="#e0e0e0" strokeWidth="10" fill="none" />
//             <circle
//               cx="100"
//               cy="100"
//               r="90"
//               stroke="#76c7c0"
//               strokeWidth="10"
//               fill="none"
//               strokeDasharray={`${(progressIndex * (Math.PI * 90 * 2)) / 30} ${Math.PI * 90 * 2}`}
//               strokeDashoffset={Math.PI * 90 * 2}
//             />
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// }

// // App component
// function App() {
//   return (
//     <div className="App">
//       <div className="left-section">
//         {/* Header buttons */}
//         <div className="header">
//           <button className="sign-in">Sign In</button>
//           <div className="header-right">
//             <button>Use Timer</button>
//             <button>Schedule Tasks</button>
//           </div>
//         </div>
//         {/* Clock */}
//         <Clock />

//         {/* Moving words */}
//         <MovingWords />
//       </div>
//       {/* Clipboard */}
//       <Clipboard />
//     </div>
//   );
// }

// export default App;










import React, { useEffect, useState } from 'react';
import './App.css';

// Clock component
function Clock() {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours() % 12;

      setTime({
        seconds: (seconds / 60) * 360,
        minutes: ((minutes + seconds / 60) / 60) * 360,
        hours: ((hours + minutes / 60) / 12) * 360,
      });
    };
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <div className="number"><span>12</span></div>
      <div className="number"><span>1</span></div>
      <div className="number"><span>2</span></div>
      <div className="number"><span>3</span></div>
      <div className="number"><span>4</span></div>
      <div className="number"><span>5</span></div>
      <div className="number"><span>6</span></div>
      <div className="number"><span>7</span></div>
      <div className="number"><span>8</span></div>
      <div className="number"><span>9</span></div>
      <div className="number"><span>10</span></div>
      <div className="number"><span>11</span></div>
      <div className="hand hour" style={{ transform: `translateX(-50%) rotate(${time.hours}deg)` }}></div>
      <div className="hand minute" style={{ transform: `translateX(-50%) rotate(${time.minutes}deg)` }}></div>
      <div className="hand second" style={{ transform: `translateX(-50%) rotate(${time.seconds}deg)` }}></div>
      <div className="center-point"></div>
    </div>
  );
}

// Moving words component
function MovingWords() {
  const words = [
    "Create your todo list.",
    "Use a timer to track your time.",
    "Review your schedule.",
    "Take breaks between tasks."
  ];
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentWord((prev) => prev + words[wordIndex][letterIndex]);
      setLetterIndex((prev) => prev + 1);
    }, 100);

    if (letterIndex === words[wordIndex].length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setLetterIndex(0);
        setCurrentWord('');
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 5000);
    }

    return () => clearInterval(typingInterval);
  }, [letterIndex, wordIndex]);

  return (
    <div className="moving-words">
      <h2>Plan your day</h2>
      <p>{currentWord}</p>
    </div>
  );
}

function Clipboard() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  // Function to handle the countdown logic
  const calculateTimeDifference = (endDateTime) => {
    const now = new Date();
    const difference = new Date(endDateTime) - now;

    if (difference > 0) {
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      return { hours, minutes, seconds, difference };
    } else {
      // If time has passed, return zero values and mark as completed
      return { hours: 0, minutes: 0, seconds: 0, difference: 0 };
    }
  };

  const handleAddTask = () => {
    setShowModal(true);
    setCurrentTaskIndex(null);
    setTaskInput('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
  };

  const handleSaveTask = () => {
    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);

    if (startDateTime >= endDateTime) {
      alert('End time must be after start time.');
      return;
    }

    const newTask = {
      text: taskInput,
      startDateTime,
      endDateTime,
      completed: false,
      timeLeft: calculateTimeDifference(endDateTime),
    };

    if (currentTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[currentTaskIndex] = newTask;
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, newTask]); // Add new task
    }

    setShowModal(false);
    setTaskInput(''); // Clear input fields
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
  };

  const handleEditTask = (index) => {
    const task = tasks[index];
    setCurrentTaskIndex(index);
    setTaskInput(task.text);
    setStartDate(task.startDateTime.toISOString().split('T')[0]);
    setStartTime(task.startDateTime.toISOString().split('T')[1].substr(0, 5));
    setEndDate(task.endDateTime.toISOString().split('T')[0]);
    setEndTime(task.endDateTime.toISOString().split('T')[1].substr(0, 5));
    setShowModal(true);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleRemoveCompleted = () => {
    const nonCompletedTasks = tasks.filter((task) => !task.completed);
    setTasks(nonCompletedTasks);
  };

  const updateTaskCountdowns = () => {
    const updatedTasks = tasks.map((task) => {
      const { difference, hours, minutes, seconds } = calculateTimeDifference(task.endDateTime);

      if (difference <= 0) {
        task.completed = true;
        task.timeLeft = null; // No time left when completed
      } else {
        task.timeLeft = { hours, minutes, seconds };
      }

      return task;
    });

    // Sort tasks: non-completed first, then completed at the bottom
    updatedTasks.sort((a, b) => {
      if (a.completed === b.completed) {
        return a.startDateTime - b.startDateTime;
      }
      return a.completed ? 1 : -1;
    });

    setTasks(updatedTasks);
  };

  useEffect(() => {
    const intervalId = setInterval(updateTaskCountdowns, 1000); // Update countdown every second
    return () => clearInterval(intervalId);
  }, [tasks]);

  return (
    <div className="clipboard-container">
      <button className="add-task-btn" onClick={handleAddTask}>
        Add Task
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{currentTaskIndex !== null ? 'Edit Task' : 'Add Task'}</h3>
            <input
              type="text"
              placeholder="Task Description"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <div>
              <label>Start:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div>
              <label>End:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <button className="save-btn" onClick={handleSaveTask}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="clipboard">
        <div className="paper">
          {tasks.length === 0 ? (
            <span className="empty-clipboard">
              Add tasks to your schedule for them to appear on the clipboard.
            </span>
          ) : (
            tasks.map((task, index) => (
              <div key={index} className="line">
                <span>{task.text}</span>
                <div>
                  {task.completed ? (
                    <span className="completed-text">Completed</span>
                  ) : task.startDateTime > new Date() ? (
                    <span>
                      Beginning in {task.timeLeft?.hours ?? 0}h {task.timeLeft?.minutes ?? 0}m {task.timeLeft?.seconds ?? 0}s
                    </span>
                  ) : (
                    <span>
                      {task.timeLeft?.hours ?? 0}h {task.timeLeft?.minutes ?? 0}m {task.timeLeft?.seconds ?? 0}s remaining
                    </span>
                  )}
                </div>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>

      <button className="remove-completed-btn" onClick={handleRemoveCompleted}>
        Remove Completed Tasks
      </button>
    </div>
  );
}

// App component
function App() {
  return (
    <div className="App">
      <div className="left-section">
        {/* Header buttons */}
        <div className="header">
          <button className="sign-in">Sign In</button>
          <div className="header-right">
            <button>Use Timer</button>
            <button>Schedule Tasks</button>
          </div>
        </div>
        {/* Clock */}
        <Clock />

        {/* Moving words */}
        <MovingWords />
      </div>

      {/* Clipboard */}
      <Clipboard />
    </div>
  );
}

export default App;
