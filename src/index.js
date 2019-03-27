import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { Provider } from "react-redux"
import store from "./store"

import "./styles.scss"
import AddPerson from "./AddPerson"

const Index = () => <h2>Index</h2>

const SomethingElse = () => <h2>Something Else</h2>

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/person/add">Add Person</Link>
            </li>
            <li>
              <Link to="/something">Something</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Route path="/" exact component={Index} />
          <Route path="/person/add/" component={AddPerson} />
          <Route path="/something/" component={SomethingElse} />
        </main>
      </Router>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
