//======================================================
// START SEARCH BAR
//======================================================

//1st attempt = failure


// class searchBar extends React.Component{
//     render = (state) => {
//         return(
//         <input type="search"
//         className="search"
//         placeholder={state.tags.placeholder}
//         onChange = {state.tags.handleChange}
//         />
//         )
//     }

//     editSearchTerm = (e) => {
//         this.setState({tags: e.target.value})

//     }


//     dynamicSearch = (e) => {
//         this.setState.tags.filter(tags => tags.toLowerCase().includes(this.state.tags.toLowerCase()))
//     }

// render(){
//     <form className="form-inline my-2 my-lg-0">
//             <input className="form-control mr-sm-2" type="text" placeholder="find your recipe" aria-label="Search" value = {this.state.tag} onChange = {this.editSearchTerm}/>
//             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//           </form>
// }
// }

//2nd attempt
// at first glance I though I would have to render this component in my
// navbar since I was storing my search bar there but I think I just need it
// to be in my main app since that is where all the data is being in "state"
// but I want to build it here and then plug it in once its done

// class searchBar extends React.Component{

//    render = (props) => {
//         return(
//         <label htmlFor="search">Git your recipe</label>
//         <input type="text" value = {props.inputValue} onChange={props.tagsOnChange} />
//         )
//     }

// }
//===================================
//bootstrap technique
//===================================

// import React, { Component } from "react";
// import { MDBCol, MDBSelectInput, MDBSelect, MDBSelectOptions, MDBSelectOption } from "mdbreact";

// class SearchPage extends Component {

// getValueOfSelectOne = value => {
//   console.log(value);
// }

// render() {
//   return (
//       <MDBCol md="6">
//         <MDBSelect multiple getValue={value=> this.getValueOfSelectOne(value)}>
//           <MDBSelectInput selected="Choose your option" />
//           <MDBSelectOptions search>
//             <MDBSelectOption disabled>Choose your option</MDBSelectOption>
//             <MDBSelectOption>Option nr 1</MDBSelectOption>
//             <MDBSelectOption>Option nr 2</MDBSelectOption>
//             <MDBSelectOption>Option nr 3</MDBSelectOption>
//             <MDBSelectOption>Option nr 4</MDBSelectOption>
//             <MDBSelectOption>Option nr 5</MDBSelectOption>
//           </MDBSelectOptions>
//         </MDBSelect>
//       </MDBCol>
//     );
//   }
// }

// export default SearchPage;


//===================================
//3rd attempt
//===================================


//=============
//SEARCH FORM
//=============
class searchBar extends React.Component {
    //add constructor
    constructor(props) {
        super(props);
        this.state = {
            search: ''
       }
    }
    //function to show current state
    updateSearch(event) {
        this.setState({search: event.target.value});

    }
    render() {
        let filteredTags = this.props.tags.filter(
            (tag) => {
                return recipes.tag.indexOf(this.state.search
                    ) !== -1;

            }
        )
        return(
    //rendering items based on tag


    //in navbar
        <div>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2"
                       type="text"
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}
                       aria-label="Search"/>

                       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        )
    }
    }

    export default searchBar
