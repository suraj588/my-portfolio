import { Route, Switch } from "react-router"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import HomePage from "../Pages/HomePage"
import Projects from "../Pages/Projects"
import Resume from "../Pages/Resume"


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/projects">
                <Projects/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/contact">
                <Contact/>
            </Route>
            <Route exact path="/resume">
                <Resume/>
            </Route>
        </Switch>
    )
}

export default Routes;