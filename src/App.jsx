import './App.css'
import Clocks from "./components/Clocks"

function App() {

  return (
    <div className="content-container">
      <h1 className="title">World Clocks</h1>
      <h3 className="year-header">The year is {new Date().getFullYear()}</h3>
      <div className="clock-container">
        <Clocks timeZone="Europe/London" region="Europe" label="London"/>
        <Clocks timeZone="Asia/Seoul" region="Asia" label="Seoul"/>
        <Clocks timeZone="America/New_York" region="America" label="New York"/>
        <Clocks timeZone="Australia/Sydney" region="Australia" label="Sydney"/>
      </div>
    </div>
  )
}

export default App
