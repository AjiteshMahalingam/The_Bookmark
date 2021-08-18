import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' // Browser router uses HTML5 History API
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './screens/Home'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={LoginScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App