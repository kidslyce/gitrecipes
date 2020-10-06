

var myStorage = window.localStorage
//use this variable to reference the current user
//if no one is logged in currentUser = null
let currentUser = localStorage.getItem('currentUser')


//==========================================================================
// Search Bar Component
//=====================================================================
class SearchBar extends React.Component {
    //add constructor
    constructor(props) {
        super(props);
        this.state = {
            search: ''
       }
    }
    //function to show current state
    updateSearch = (event) => {
        event.preventDefault();
        this.setState({search: event.target.value});
    }

    render() {
        let filteredTags = this.props.recipes.filter(recipe => {
              return recipe.tags.includes(this.state.search)
            }
        )
        return(
    //rendering items based on tag
    //in navbar
    //if the onChange event takes in arguments wrap the property in an anonymous


            <form onSubmit={() => {this.props.handleSearchSubmit(event, filteredTags)}} className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2"
                       type="text"
                       value={this.state.search}
                       onChange={this.updateSearch}
                       aria-label="Search"
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
 }

//============================================================================
// New User Component
//==============================================================================



class NewUser extends React.Component {
  state = {
    regUsername: '',
    regPassword: '',
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
    })
  }


  render = () => {
    return (
      <div>
        <h1>Create User</h1>
        <form onSubmit={this.createUser}>
          <label htmlFor="regUsername">Username:</label>
          <input id='regUsername' type="text" name="regUsername" onChange={this.onChange} required />
          <br/>
          <label  htmlFor="regPassword">Password:</label>
          <input id='regPassword' type="password" name="regPassword"onChange={this.onChange}  />
          <br/>
          <input type="submit" value="Create User" />
        </form>
      </div>
    )
  }
}


//=============================================================================
// Login Component
//===========================================================================

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    currentUser: ''
  }

  onChange = () => {
    this.setState( { [event.target.id]: event.target.value })
  }



  logIn = (event) => {
    event.preventDefault();
    axios.post('/login', this.state).then(response => {
      console.log(response);
      this.setState({
        username: '',
        password: '',
        currentUser: response.data.username
      })
      localStorage.setItem('currentUser', this.state.currentUser)
      location.reload()
    })
  }




  render = () => {
    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={this.logIn}>
          <label htmlFor="username">Username:</label>
          <input id='username' type="text" name="username" onChange={this.onChange} required/>
          <br/>
          <label  htmlFor="logPassword">Password:</label>
          <input id='password' type="password" name="password" onChange={this.onChange}  />
          <br/>
          <input type="submit" value="Log In" />
        </form>
      </div>

      )
  }
}

//==============================================================================
//  Header Component
//==============================================================================
class Header extends React.Component {

    render = () => {
        return <header>
            <div className="recipes-title">Git Recipe</div>

        </header>
    }
}

//==========================================================================
//  Footer Component
//==============================================================================
  class Footer extends React.Component {

    render = () => {
        return <footer>
            <div className="recipes-footer">ABOUT US!</
            div>
  
        </footer>
    }
}




//=====================================================================
// COMMENT Component
//=====================================================================

const Comments = (props) => {
    return (
    <div className='comment-container'>
      <ul className='comment-list'>
      <h3>Comments</h3>
        <li>
        { props.filteredComments.map(comments => {
            return (
              <p>{comments.comment}</p>
        )})}
        </li>
      </ul>
      <details><summary>Add a comment</summary>
      <form onSubmit={props.handleCommentSubmit}>
        <textarea id='comment' onChange={props.handleChange}></textarea>
        <input type='submit' value='Submit Comment'/>
      </form>
      </details>
    </div>)
}


//=====================================================================
// Functional Stateless Components
//=====================================================================

//=====================================================================
// Nav
//=====================================================================

const Nav = (props) => {



      return <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> {currentUser == null ? <text>Log In/Sign Up</text> : <text>Add Recipe</text>} </button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Recipe</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      {currentUser == null ? <Login></Login> : <AddRecipe/>}
      {currentUser == null ? <NewUser></NewUser> : null}

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{currentUser == null ? <text>Log In/Sign Up</text> : <text>Welcome {currentUser}!</text>}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Login</a>
                  <a className="dropdown-item" href="#">Sign Up </a>
                </div>
              </li>
            </ul>
            <SearchBar recipes={props.recipes} handleSearchSubmit={props.handleSearchSubmit}/>
          </div>
        </nav>


}
//=====================================================================
// Recipe Item
//=====================================================================


const RecipeItem = (props) => {
    return ( <li className="card-items" key={props.recipe._id}>
                    <h4>{props.recipe.name} </h4>
                    <br />
                    <img src={props.recipe.image} alt={props.recipe.name}/>
                    <details><summary>More info</summary>
                      Prep time: {props.recipe.prepTime}<br />
                      Cook time: {props.recipe.cookTime}<br />
                      Ingredients: {props.recipe.ingredients}<br />
                      Instructions: {props.recipe.instructions}<br />
                      Tags: {props.recipe.tags}<br />
                      Author: {props.recipe.author}<br />
                      {/* /* STAR RATING PLACE HOLDER */ }
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    <details><summary>Edit this recipe</summary>
                      <form id={props.recipe._id} onSubmit={props.updateRecipe}>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                          type="text"
                          id="name"
                          onChange={props.handleChange}
                          defaultValue={props.recipe.name}
                          className="form-control"
                         />
                        <br />
                        <label htmlFor="image">Image</label>
                        <br />
                        <input
                          type="text"
                          id="image"
                          onChange={props.handleChange}
                          defaultValue={props.recipe.image}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="prepTime">Prep Time</label>
                        <br />
                        <input
                          type="text"
                          id="prepTime"
                          onChange={props.handleChange}
                          defaultValue={props.recipe.prepTime}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="cookTime">Cook Time</label>
                        <br />
                        <input
                          type="text"
                          id="cookTime"
                          onChange={props.handleChange}
                          defaultValue={props.recipe.cookTime}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="instructions">Instructions</label>
                        <br />
                        <input
                          type="text"
                          id="instructions"
                          onChange={props.handleChange}
                          defaultValue={props.recipe.instructions}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="ingredients">Ingredients</label>
                        <br />
                        <input
                          type="text"
                          id="ingredients"
                          onChange={props.handleChange}
                          defaultValue={props.recipe.ingredients}
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="tags">Tags</label>
                      <br />
                      <input
                        type="text"
                        id="tags"
                        onChange={props.handleChange}
                        defaultValue={props.recipe.tags}
                        className="form-control" />
                      <br />
                        <input type="submit" className="btn btn-outline-dark" value="Update Recipe" />
                      </form>
                      </details>
                      <button
                        value={props.recipe._id}
                        onClick={props.deleteRecipe}
                        className="btn btn-outline-dark"
                      >DELETE
                      </button>
                    </details>
                  </li>
    )

}
//=====================================================================
// Recipe List
//=====================================================================

const RecipeList = (props) => {
  return (
    <div className="all-recipes-container">

                <ul className="ul-cards">
                    <div className= "recipe-card">
                { props.filteredTags.map(recipe => {
                    return (
                     
                        <RecipeItem recipe={recipe}></RecipeItem>
                        
                      
                      )
                })}
                {/* recipe card div */}
                </div>
                </ul>

              </div>
  )


//=====================================================================
// Add Recipe
//=====================================================================

const AddRecipe = (props) => {
    return(
            <div className="form-container">
              <form onSubmit={props.handleSubmit}>
                <label htmlFor="author">Author</label><br />
                <input id="author" type="text" onChange={props.handleChange} className="form-control"/><br />
                <label htmlFor="name">Name</label>
                <br />
                <input id="name"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control"  />
                <br />
                <label htmlFor="prepTime">Prep Time</label>
                <br />
                <input id="prepTime"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control" />
                <br />
                <label htmlFor="cookTime">Cook Time</label>
                <br />
                <input id="cookTime"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control"/>
                <br />
                <label htmlFor="ingredients">Ingredients</label>
                <br />
                <input
                  id="ingredients"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control" />
                <br />
                <label htmlFor="instructions">Instructions</label>
                <br />
                <input
                  id="instructions"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control" />
                <br />
                <label htmlFor="image">Image</label>
                <br />
                <input
                  id="image"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control" />
                <br />
                <label htmlFor="tags">Tags</label>
                <br />
                <input
                  id="tags"
                  type="text"
                  onChange={props.handleChange}
                  className="form-control" />
                <br />
                <input
                  type="submit"
                  value="Add"
                  className="btn btn-outline-dark" />
              </form>
              </div>
    )

}

//===============================================================================
// APP
//===============================================================================


class App extends React.Component {
    state = {
    author:'',
    name: '',
    prepTime: '',
    cookTime: '',
    ingredients: '',
    instructions: '',
    image: '',
    tags:'',
    comment: '',
    commentAuthor: '',
    recipes: [],
    filteredTags: [],
    filteredComments: []
    }


//=================================================================
// App functions
//=================================================================



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
                  prepTime:'',
                  cookTime:'',
                  ingredients: '',
                  instructions:'',
                  image:'',
                  tags:''
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
            this.setState( { [event.target.id]: event.target.value, author: currentUser })
        }
          handleSubmit = (event) => {
            event.preventDefault();
            event.currentTarget.reset();
            axios
              .post('/recipes', this.state)
              .then(response => this.setState(
                {
                    recipes: response.data,
                    author: '',
                    name: '',
                    prepTime: '',
                    cookTime: '',
                    ingredients: '',
                    instructions: '',
                    image: '',
                    tags:'',
                    comments: ''
                })
            )
            }


//=================================================================
// handle the search submit action
//=================================================================

     handleSearchSubmit = (event, filteredResults) => {
        event.preventDefault();
         this.setState({
             filteredTags: filteredResults
         })

     }

 //=================================================================
 // handle the comment submits
 //=================================================================

      handleCommentSubmit = (event, filteredResults) => {
         event.preventDefault();
          this.setState({
              filteredComments: filteredResults,
              commentAuthor: currentUser
          })

      }



//=================================================================
// RENDER for APP
//=================================================================

          render = () => {
            return <div className="recipe-container">

            <Nav recipes={this.state.recipes} handleSearchSubmit={this.handleSearchSubmit}/>
            <Header />
            <Login />

            <RecipeList
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleCommentSubmit={this.handleCommentSubmit}
                deleteRecipe={this.deleteRecipe}
                updateRecipe={this.updateRecipe}
                filteredTags={this.state.filteredTags}
                filteredComments={this.state.filteredComments}
              />

            </div>
          }
        }
      }
//=========================================
// The end ...
//=========================================
        ReactDOM.render(<App />, document.querySelector('main'))
