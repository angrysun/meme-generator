import { useState, useEffect } from "react"

export default function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  console.log("Component rendered")

  useEffect(() => {
    console.log("Effect ran")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(response => response.json())
      .then(data => {
        setStarWarsData(data)
      })
  }, [count])


  // fetch("https://swapi.dev/api/people/1")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
    // .then(data => setStarWarsData(data))

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
    </div>
  )
}
