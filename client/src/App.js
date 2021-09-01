import { Footer } from "./controller/navigation/Footer";
import { TopNav } from "./controller/navigation/TopNav";
import { Route, Switch } from 'react-router-dom'
import { Home } from "./view/Home";
import { Cart } from "./view/Cart";
import { SingleProduct } from "./view/SingleProduct";

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/product/:id' component={SingleProduct} />
          <Route path='/cart' component={Cart} />
          <Route path='/login' component={Home} />
          <Route path='/signup' component={Home} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
