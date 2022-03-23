import Header from "./Header.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import  "./App.css"
import ItemListContainer from "./components/ItemListContainer.js"

function App() {
  const greeting = "We are SKY, the number one geek store in Atlanta."
  const userName = "John Doe"
  return (
    <>
    <header><Header/></header>
    <body><ItemListContainer greeting={greeting} userName={userName} /></body>
    </>
  )
}

export default App;
