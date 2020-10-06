

var myStorage = window.localStorage
//use this variable to reference the current user
//if no one is logged in currentUser = null
let currentUser = localStorage.getItem('currentUser')


//=========================================================
// BOOTSTRAP MODAL ATTEMPT 5000
//=========================================================












//=========================================================
// Imported bootsrap modals
//=========================================================
// import React from "react";
// import ReactDOM from "react-dom";
// import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";


// Sample MODAL
//=========================================================

// const App = (props) => {
//     const [isOpen, setIsOpen] = React.useState(false);
//     const [timer, setTimer] = React.useState(0);
//     const [startTime, setStartTime] = React.useState(0);
//     const [endTime, setEndTime] = React.useState(0);

//     const showModal = () => {
//       setIsOpen(true);
//       setTitle("Modal Ready");
//       document.body.style.backgroundColor = "white";
//     };

//     const hideModal = () => {
//       setIsOpen(false);
//     };

//     const startTimer = () => {
//       setStartTime(Date.now());
//     };

//     const modalLoaded = () => {
//       setEndTime(Date.now());
//     };

//     const onExit = () => {
//       setTitle("Goodbye 😀");
//     };

//     const onExited = () => {
//       document.body.style.backgroundColor = "green";
//     };

//     return (
//       <>
//         <button onClick={showModal}>Display Modal</button>
//         <Modal
//           show={isOpen}
//           onHide={hideModal}
//           onEnter={startTimer}
//           onEntered={modalLoaded}
//           onExit={onExit}
//           onExited={onExited}
//         >
//           <Modal.Header>
//             <Modal.Title>{title}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>{endTime - startTime} ms</Modal.Body>
//           <Modal.Footer>
//             <button onClick={hideModal}>Cancel</button>
//             <button>Save</button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   };

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


<<<<<<< HEAD
const Nav = (props) => {
    if (currentUser === null){
      return <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#ModalLoginForm">
            Launch demo modal
            </button>


            <SearchBar recipes={props.recipes} handleSearchSubmit={props.handleSearchSubmit}/>
          </div>
        </nav>
    }else{
      return <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome {currentUser}!
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Add Recipe</a>
                </div>
              </li>
            </ul>

            <SearchBar recipes={props.recipes} handleSearchSubmit={props.handleSearchSubmit}/>
          </div>
        </nav>
    }


}
=======
>>>>>>> ac1ca7790c8979765cc1deff8a296c654383dbf6

//=======================================================================
// User Modal Component
//=======================================================================


// class UserModal extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//           showModal: false,
//           loading: false,
//           error: null
//         };
//       }

//       openModal() {
//         this.setState({
//           showModal: true
//         });
//       }

//       closeModal() {
//         this.setState({
//           showModal: false,
//           error: null
//         });
//       }

//       onLoginSuccess(method, response) {
//         console.log("logged successfully with " + method);
//       }

//       onLoginFail(method, response) {
//         console.log("logging failed with " + method);
//         this.setState({
//           error: response
//         });
//       }

//       startLoading() {
//         this.setState({
//           loading: true
//         });
//       }

//       finishLoading() {
//         this.setState({
//           loading: false
//         });
//       }

//       afterTabsChange() {
//         this.setState({
//           error: null
//         });
//       }

//       render() {
//         return (
//           <div>
//             <button onClick={() => this.openModal()}>Open Modal</button>

//             <ReactModalLogin
//               visible={this.state.showModal}
//               onCloseModal={this.closeModal.bind(this)}
//               loading={this.state.loading}
//               error={this.state.error}
//               tabs={{
//                 afterChange: this.afterTabsChange.bind(this)
//               }}
//               loginError={{
//                 label: "Couldn't sign in, please try again."
//               }}
//               registerError={{
//                 label: "Couldn't sign up, please try again."
//               }}


//             />
//           </div>
//         );
//       }
//     }

//============================================================================
// New User Component
//==============================================================================

const UserModal = (props) => {
  return(
<div id="ModalLoginForm" class="modal fade">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">Login</h1>
            </div>
            <div class="modal-body">
                <form role="form" method="POST" action="">
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <label class="control-label">E-Mail Address</label>
                        <div>
                            <input type="email" class="form-control input-lg" name="email" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" name="password">
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember"> Remember Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-success">Login</button>

                            <a class="btn btn-link" href="">Forgot Your Password?</a>
                        </div>
                    </div>
                </form>
                <h1>Or Signup!</h1>
                <form role="form" method="POST" action="">
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <label class="control-label">Username</label>
                        <div>
                            <input type="text" class="form-control input-lg" name="name" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">E-Mail Address</label>
                        <div>
                            <input type="email" class="form-control input-lg" name="email" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" name="password">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Confirm Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" name="password_confirmation">
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-success">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>)

}



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


  logOut = (event) => {
    localStorage.clear()
    location.reload()
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
        <button onClick={this.logOut}>Log Out</button>

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
class Footer extends React.Component {

//=====================================================================
// COMMENT Component
//=====================================================================

class Comments extends React.Component {
  state = {
    name: '',
    author: '',
    comment: '',
    comments: []
  }

  componentDidMount = () => {
      axios
        .get('/comments')
        .then(response => {
          this.setState({
            comments: response.data,
          })
        })
    }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value, author: currentUser})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    axios
      .post('/comments', this.state)
      .then(response => this.setState(
        {
            comments: response.data,
            author: '',
            name: '',
            comment: ''
        })
    )
  }


  render = () => {
    return (
    <div className='comment-container'>
      <ul className='comment-list'>
      <h3>Comments</h3>
      {this.state.comments.map(comment => { return (
        <li>
          <h5>{comment.author}</h5>
          <p>{comment.comment}</p>
        </li>
      )})}
      </ul>
      <details><summary>Add a comment</summary>
      <form onSubmit={this.handleSubmit}>
        <textarea id='comment' onChange={this.handleChange}></textarea>
        <input type='submit' value='Submit Comment'/>
      </form>
      </details>
    </div>)
  }
}



//=====================================================================
// Functional Stateless Components
//=====================================================================

//=====================================================================
// Nav
//=====================================================================

const Nav = (props) => {
    if (currentUser === null){
      return <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <AddRecipe />

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
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login/Sign Up
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
    }else{
      return <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome {currentUser}!
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Add Recipe</a>
                </div>
              </li>
            </ul>

            <SearchBar recipes={props.recipes} handleSearchSubmit={props.handleSearchSubmit}/>
          </div>
        </nav>
    }


}
//=====================================================================
// Recipe Item
//=====================================================================


const RecipeItem = (props) => {
    return (
<li className="card-items" key={props.recipe._id}>
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
                    <Comments id={recipe._id}/>
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
                        <RecipeItem recipe={recipe}/>


                )})}
                {/* recipe card div */}
                </div>
                </ul>
              </div>
  )
}

//=====================================================================
// Add Recipe
//=====================================================================

const AddRecipe = (props) => {
    return(
<details>
            <summary>Add Recipe</summary>
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
              </details>
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
    recipes: [],
    filteredTags: []
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
// RENDER for APP
//=================================================================

          render = () => {
            return <div className="recipe-container">

            <Nav recipes={this.state.recipes} handleSearchSubmit={this.handleSearchSubmit}/>
            <AddRecipe
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>
            <Header />
            <NewUser />
            <Login />


            <RecipeList
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                deleteRecipe={this.deleteRecipe}
                updateRecipe={this.updateRecipe}
                filteredTags={this.state.filteredTags}
              />

            </div>
          }
        }

//=========================================
// The end ...
//=========================================
        ReactDOM.render(<App />, document.querySelector('main'))
