import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
import { Header, List } from 'semantic-ui-react';

function App(){
  const [activities, setActivities] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/activities')
.then(response=>{
setActivities(response.data)
})
  
}, [])

  return(
  <div>
    <Header as={"h2"} icon={"users"} content={"Reactivities"}></Header>
    {/* {
      ducks.map( duck => (
        <DuckItem key={duck.name} duck={duck}/>
      ))

    } */}
    <List>
    {activities.map( (activity: any) => (
      <List.Item key={activity.id}>
        {activity.title}
      </List.Item>

    ))}
    </List>
  </div>
  )
}

export default App
