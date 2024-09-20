import logo from './logo.svg';
import './App.css';
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCard from './Card/UserCard';



function App() {

  const posts = data.posts

  console.log(posts)

  return (
    <div className="App"  >
   {

      posts.map((post)=>{
        return   <UserCard post= {post} ></UserCard>
      })

   }   
   
  
    </div>
  );
}

export default App;
