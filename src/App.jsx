import './App.css'
import  WelcomeComponent from './WelcomeComponent'
import CardComponents from './CardComponents'
function App() {
  
  const marvelData = [
    {
      img:"https://thumbs.dreamstime.com/b/capt-rare-odd-w-your-patriotism-blue-suit-white-star-shield-red-stripes-insp-captain-america-show-your-patriotism-327537290.jpg",
      name:"Captain America"
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png",
      name:"Hulk"
    },
    {
      img:"https://i.pinimg.com/550x/13/19/e7/1319e7922faffbfa43034a816126b97d.jpg",
      name:"Thor"
    },
    {
      img:"https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png",
      name:"Bat Man"
    }
  ]
  return (
    <>
      <h1>Full Stack Web Development</h1>
      <LocalComponent />
      <WelcomeComponent />
      <div id="card-main-container">
        {marvelData.map((ele, index) => (
          <CardComponents key={index} img={ele.img} name={ele.name} />
        ))}
      </div>
    </>
  );
}

function LocalComponent(){
  return(
    <>
      <h3>React is a library for full stack web</h3>
    </>
    
  )
}


export default App