class App extends React.Component {
    state={
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
          .then((response) => {
            this.setState({
              recipes: response.data
            })
          })
      }
      deleteRecipe = (event) => {
        axios
          .delete('/recipes/' + event.target.value)
          .then(response => this.setState({recipes: response.data
        })
        )
      }
      handleChange = event =>{
        this.setState( { [event.target.id]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        axios
          .post('/recipes', this.state)
          .then(response => this.setState(
            {
                name: '',
                prepTime: '',
                cookTime: '',
                ingredients: '',
                instructions: '',
                image: '',
                tags: '',
                recipes: reponse.data 
            })
        )
        }
        updateRecipe = (event) => {
            event.preventDefault()
            const id = event.target.id
            axios
              .put('/recipes/' + id, this.state)
              .then(response => {
                this.setState({
                    name: '',
                    prepTime: '',
                    cookTime: '',
                    ingredients: '',
                    instructions: '',
                    image: '',
                    tags: '',
                    recipes: reponse.data 
                })
              })
          }
          render = () => {
            return (
              <div>
                <h2>Create Recipe</h2>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input id="name" onChange={this.handleChange} type="text" />
                  <br />
                  <label htmlFor="prep">Prep Time</label>
                  <br />
                  <input id="prep" type="text" onChange={this.handleChange} />
                  <br />
                  <label htmlFor="img">Image</label>
                  <br />
                  <input id="img" type="text" onChange={this.handleChange} />
                  <br />
                  <label htmlFor="cooktime">Cook Time</label>
                  <br />
                  <input id="cooktime" type="text" onChange={this.handleChange} />
                  <br />
                  <label htmlFor="ingreds">Ingredients</label>
                  <br />
                  <input id="ingreds" type="text" onChange={this.handleChange} />
                  <br />
                  <label htmlFor="instructions">Instructions</label>
                  <br />
                  <input id="instructions" type="text" onChange={this.handleChange} />
                  <br />
                  <label htmlFor="tags">Tags</label>
                  <br />
                  <input id="tags" type="text" onChange={this.handleChange} />
                  <br />
                  <input type="submit" value="Create Recipe" />
                </form>
                <h3>List of Recipes</h3>
                <ul>
                { this.state.recipe.map(recipe => { return (
                  <li key={recipe._id}>
                    {recipe.name}<br />
                    <img src={recipe.img} alt={recipe.name}/>
                    <button
                      value={recipe._id}
                      onClick={this.deleteRecipe}
                    >DELETE
                    </button>
                    <details><summary>Edit this recipe</summary>
                      <form onSubmit={this.updateRecipe} id={Recipe._id}>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                          type="text"
                          id="name"
                          onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="img">Image</label>
                        <br />
                        <input
                          type="text"
                          id="img"
                          onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="prep">Prep Time</label>
                        <br />
                        <input
                          type="text"
                          id="prep"
                          onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="cooktime">Cook Time</label>
                        <br />
                        <input
                          type="text"
                          id="cooktime"
                          onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="instructions">Instructions</label>
                        <br />
                        <input
                          type="text"
                          id="instructions"
                          onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="ingreds">Ingredients</label>
                        <br />
                        <input
                          type="text"
                          id="ingreds"
                          onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="tags">Tags</label>
                        <br />
                        <input
                          type="text"
                          id="tags"
                          onChange={this.handleChange}
                        />
                        <br />
                        <input type="submit" value="Update Recipe" />
                      </form>
                    </details>
                  </li>
                )})}
                </ul>
              </div>
            )
          }
        }
        
        ReactDOM.render(<App />, document.querySelector('main'))
        