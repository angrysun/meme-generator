import { useState, useEffect } from "react"

export default function App() {
  const [starWarsData, setStarWarsData] = useState({})

  // console.log("Component rendered")

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then(response => response.json())
      .then(data => {
        setStarWarsData(data)
      })
  }, )


  // fetch("https://swapi.dev/api/people/1")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
    // .then(data => setStarWarsData(data))

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}
