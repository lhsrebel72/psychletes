import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CartView from './Views/Cart';
import HomeView from './Views/Home';
import ProductView from './Views/Products';

const Main = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={HomeView}></Route>
      <Route exact path='/products' component={ProductView}></Route>
      <Route exact path='/cart' component={CartView}></Route>
    </Switch>
  );
}

export default Main;