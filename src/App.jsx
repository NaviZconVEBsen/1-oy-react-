import data from '../public/data'
import  './App.css'
import Card from './componets/card/Card'

function App() {
  return (
    <div className="App">
        <header>
            <div className="container">
                <h2>Exclusive</h2>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>about</li>
                        <li>sign up</li>
                    </ul>
                </nav>
                <div className="tepa">
                    <input type="text" placeholder='What are you looking for?' />
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
        </header>
        <hr />
        <main>
            <div className="container">

            <div className="mini">
                <h1>Products</h1>
                <button className='btn'>Move All To Bag</button>
            </div>
            <div className="ota">
                 {data.map((m,i)=>{
                    return <Card key={i} nomi={m.name} narx={m.price} rasm={m.img}></Card>
                 })}
            </div>

            </div>
        </main>
        
        
        </div>
  )
}

export default App