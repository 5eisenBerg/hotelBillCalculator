import { useState } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState("");
  const [room, setRoom] = useState("standard");
  const [bill, setBill] = useState(null);

  const rates = { standard: 1500, deluxe: 2500, suite: 4000 };

  const daysChanged = (event) => setDays(event.target.value);
  const roomChanged = (event) => setRoom(event.target.value);

  const calculateBill = () => {
    const d = parseInt(days);
    if (isNaN(d) || d <= 0) {
      alert("Please enter a valid number of days.");
      return;
    }
    setBill(d * rates[room]);
  };

  return (
    <div className="main-container">
      <div className="card-container">
        <h1 className="title">Hotel Bill Calculator</h1>
        <div className="form">
          <div className="section">
            <label htmlFor="days">Number of days:</label>
            <input
              className="ip"
              id="days"
              type="number"
              value={days}
              onChange={daysChanged}
              placeholder="Enter days"
            />
          </div>

          <div className="section">
            <label htmlFor="rooms">Room Type:</label>
            <select
              id="rooms"
              value={room}
              onChange={roomChanged}
              className="ip"
            >
              <option value="standard">Standard – ₹1500</option>
              <option value="deluxe">Deluxe – ₹2500</option>
              <option value="suite">Suite – ₹4000</option>
            </select>
          </div>

          <button className="btn" onClick={calculateBill}>
            Calculate Bill
          </button>

          {bill !== null && <h2 className="result">Total Bill: ₹{bill}</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
