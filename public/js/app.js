

class Nav extends React.Component {

    render = () => {
        return <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand home-nav" href="#">HOME</a>
        </nav>
    }
}

class Login extends React.Component {
  state = {
    regUsername: '',
    regPassword: '',
    username: '',
    password: '',
    user: ''
  }

  onChange = () => {
    this.setState( { [event.target.id]: event.target.value })
  }

  createUser = (event) => {
    event.preventDefault();
    event.target.reset();
    axios.post('/register', this.state).then(response => {
      this.setState({
        regUsername: '',
        regPassword: ''
      })
      // return console.log(this.state.regUsername + ' ' + this.state.regPassword);
    })
  }

  logIn = (event) => {
    event.preventDefault();
    axios.post('/login', this.state).then(response => {
      this.setState({
        username: '',
        password: '',
      })
    })
  }

  getUser = () => {
    axios.get('/user', this.state).then((res) => {

    })
  }

  render = () => {
    return (
      <div>
      <h1>{this.state.user}</h1>
        <h1>Create User</h1>
        <form onSubmit={this.createUser}>
          <label htmlFor="regUsername">Username:</label>
          <input id='regUsername' type="text" name="regUsername" onChange={this.onChange} required/>
          <br/>
          <label  htmlFor="regPassword">Password:</label>
          <input id='regPassword' type="password" name="regPassword"onChange={this.onChange}  />
          <br/>
          <input type="submit" value="Submit" />
        </form>
        <h1>Login</h1>
        <form onSubmit={this.logIn}>
          <label htmlFor="username">Username:</label>
          <input id='username' type="text" name="username" onChange={this.onChange} required/>
          <br/>
          <label  htmlFor="logPassword">Password:</label>
          <input id='password' type="password" name="password" onChange={this.onChange}  />
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>)

  }
}


class Header extends React.Component {

    render = () => {
        return <header>
            <div className="recipes-title">Git That Recipe!</div>
        </header>
    }
}
class App extends React.Component {
    state = {
    name: '',
    prepTime: '',
    cookTime: '',
    ingredients: '',
    instructions: '',
    image: '',
    tags:[],
    recipes: []
    }
    componentDidMount = () => {
        axios
          .get('/recipes')
          .then(response => {
            this.setState({
              recipes: response.data,
            })
          })
      }

        updateRecipe = (event) => {
            event.preventDefault()
            const id = event.target.id
            axios
              .put('/recipes/' + id, this.state)
              .then(response => {
                this.setState({
                    recipes: response.data,
                    name: '',
                    prepTime: '',
                    cookTime: '',
                    ingredients: '',
                    instructions: '',
                    image: '',
                    tags:[],
                })
              })
          }
          deleteRecipe = (event) => {
            axios
              .delete('/recipes/' + event.target.value)
              .then(response => this.setState({recipes: response.data,
            })
            )
          }
          handleChange = event =>{
            this.setState( { [event.target.id]: event.target.value })
        }
        handleSubmit = (event) => {
            event.preventDefault()
            event.currentTarget.reset();
            event.preventDefault();
            axios
              .post('/recipes', this.state)
              .then(response => this.setState(
                {
                    recipes: response.data,
                    name: '',
                    prepTime: '',
                    cookTime: '',
                    ingredients: '',
                    instructions: '',
                    image: '',
                    tags:[],
                })
            )
            }
          render = () => {
            return <div className="recipe-container">
            <Nav />
            <Login />
            <Header />
            <details>
            <summary>Add Recipe</summary>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <br />
                <input id="name"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control"  />
                <br />
                <label htmlFor="prepTime">Prep Time</label>
                <br />
                <input id="prepTime"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control" />
                <br />
                <label htmlFor="cookTime">Cook Time</label>
                <br />
                <input id="cookTime"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control"/>
                <br />
                <label htmlFor="ingredients">Ingredients</label>
                <br />
                <input
                  id="ingredients"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control" />
                <br />
                <label htmlFor="instructions">Instructions</label>
                <br />
                <input
                  id="instructions"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control" />
                <br />
                <label htmlFor="image">Image</label>
                <br />
                <input
                  id="image"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control" />
                <br />
                <label htmlFor="tags">Tags</label>
                <br />
                <input
                  id="tags"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control" />
                <br />
                <input
                  type="submit"
                  value="Add"
                  className="btn btn-outline-dark" />
              </form>
              </div>
              </details>
                <div className="all-recipes-container">
                <ul>
                { this.state.recipes.map(recipe => { return (
                  <li key={recipe._id}>
                    <h4>Name: {recipe.name} </h4>
                    <br />
                    <img src={recipe.image} alt={recipe.name}/>
                    <details><summary>Edit this recipe</summary>
                      <form id={recipe._id} onSubmit={this.updateRecipe}>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                          type="text"
                          id="name"
                          onChange={this.handleChange}
                          defaultValue={recipe.name}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="image">Image</label>
                        <br />
                        <input
                          type="text"
                          id="image"
                          onChange={this.handleChange}
                          defaultValue={recipe.image}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="prepTime">Prep Time</label>
                        <br />
                        <input
                          type="text"
                          id="prepTime"
                          onChange={this.handleChange}
                          defaultValue={recipe.prepTime}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="cookTime">Cook Time</label>
                        <br />
                        <input
                          type="text"
                          id="cookTime"
                          onChange={this.handleChange}
                          defaultValue={recipe.cookTime}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="instructions">Instructions</label>
                        <br />
                        <input
                          type="text"
                          id="instructions"
                          onChange={this.handleChange}
                          defaultValue={recipe.instructions}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="ingredients">Ingredients</label>
                        <br />
                        <input
                          type="text"
                          id="ingredients"
                          onChange={this.handleChange}
                          defaultValue={recipe.ingredients}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="tags">Tags</label>
                        <br />
                        <input
                          type="text"
                          id="tags"
                          onChange={this.handleChange}
                          defaultValue={recipe.tags}
                          className="form-control" />
                        <br />
                        <input type="submit" value="Update Recipe" />
                      </form>
                      <button
                        value={recipe._id}
                        onClick={this.deleteRecipe}
                        className="btn btn-outline-dark"
                      >DELETE
                      </button>
                    </details>
                  </li>
                )})}
                </ul>
              </div>

            </div>
          }
        }

        ReactDOM.render(<App />, document.querySelector('main'))
