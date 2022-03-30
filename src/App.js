import Header from "./Header.js"
import 'bootstrap/dist/css/bootstrap.css'
import  "./App.css"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemCount from "./components/ItemCount.jsx"

function App() {
  const greeting = "We are SKY, the number one geek store in Atlanta."
  const userName = "John Doe"
  return (
    <>
    <header><Header/></header>
    <body>
      <ItemListContainer greeting={greeting} userName={userName} />
    </body>
    </>
  )
}

export default App;
