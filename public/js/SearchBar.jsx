
//==========================================================================
// Search Bar Component
//=====================================================================
 class SearchBar extends React.Component {
    //add constructor
    constructor(props) {
        super(props);
        this.state = {
            search: 'cat'
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

 export default SearchBar;
