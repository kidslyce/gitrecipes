class Nav extends React.Component {

    render = () => {
        return <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand home-nav" href="#">HOME</a>
        </nav>
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
            <Header />
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
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
                <label htmlFor="image">Instructions</label>
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

                <div className="all-recipes-container">
                <ul>
                { this.state.recipes.map((recipe) => { return (
                  <li key={recipe._id}>
                    <h4>Name: {recipe.name} </h4>
                    <br />
                    <img src={recipe.img} alt={recipe.name}/>
                    <button
                      value={recipe._id}
                      onClick={this.deleteRecipe}
                      className="btn btn-outline-dark"
                    >DELETE
                    </button>
                    <details><summary>Edit this recipe</summary>
                      <form onSubmit={this.updateRecipe} id={recipe._id}>
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
                        <label htmlFor="img">Image</label>
                        <br />
                        <input
                          type="text"
                          id="img"
                          onChange={this.handleChange}
                          defaultValue={recipe.image}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="prep">Prep Time</label>
                        <br />
                        <input
                          type="text"
                          id="prep"
                          onChange={this.handleChange}
                          defaultValue={recipe.prepTime}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="cooktime">Cook Time</label>
                        <br />
                        <input
                          type="text"
                          id="cooktime"
                          onChange={this.handleChange}
                          defaultValue={recipe.cooktime}
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
                        />
                        <br />
                        <input type="submit" value="Update Recipe" />
                      </form>
                    </details>
                  </li>
                )})}
                </ul>
              </div>

            </div>
          }
        }

        ReactDOM.render(<App />, document.querySelector('main'))
