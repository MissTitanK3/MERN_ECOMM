import { Footer } from "./controller/navigation/Footer";
import { TopNav } from "./controller/navigation/TopNav";
import { Route, Switch } from 'react-router-dom'
import { Home } from "./view/Home";
import { Cart } from "./view/Cart";
import { SingleProduct } from "./view/SingleProduct";
import { Login } from "./view/Login";
import { Register } from "./view/Register";
import { Profile } from "./view/Profile";

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/product/:id' component={SingleProduct} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Register} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
