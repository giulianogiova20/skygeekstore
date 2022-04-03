import Header from "./Header.js"
import 'bootstrap/dist/css/bootstrap.css'
import  "./App.css"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailList from './components/ItemDetailList';

function App() {
  const greeting = "We are SKY, the number one geek store in Atlanta."
  const userName = "John Doe"
  return (
    <>
    <header><Header/></header>
    <body>
      <ItemListContainer greeting={greeting} userName={userName} />
      <ItemDetailList />
    </body>
    </>
  )
}

export default App;
