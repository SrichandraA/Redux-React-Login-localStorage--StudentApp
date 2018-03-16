import { connect } from "react-redux";
import React, { Component } from 'react';
import { addArticle } from "../actions/index";
import 'bootstrap/dist/css/bootstrap.min.css';


const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  };
  

class Article extends Component {
  
    constructor(props){
        super(props);
        this.state = {value:''};

      this.submitHandler = this.submitHandler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      // this.TestMethod = this.TestMethod.bind(this);
    }
  
      changeHandler(event){
          this.setState({value: event.target.value});
      }
      submitHandler(event){
            this.props.addArticle({value:this.state.value})
         
          
          event.preventDefault();
          this.setState({value: ''});
      }
      // TestMethod(event){
      // 	alert("fdf");
      // }
       render(){
        let listItems = this.props.articles.map((article) =>
        <li>
            {article.value}
        </li>
    );
           return(
               <div>
                  {/* <div><Navbar/></div> */}
                   <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                      <h2>Articles</h2>
                      <br/>
                      <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                          <label>Enter Article</label>
                          <input type="text" id = "text_field" value={this.state.value} onChange={this.changeHandler} className="form-control"/>
                        </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                      <br/>
                      {/* <Test 
                          value = {"Dsc"}
                          onDell= {this.TestMethod}
                      /> */}
                      <h4>List</h4>
                      <br />
                      <ul>	{listItems} </ul>
                    </div>
                  </div>
               </div>
           );
      }
  }
  

// const Article = ({ articles }) => (
//   <ul className="list-group list-group-flush">
//     {articles.map(el => (
//       <li className="list-group-item" key={el.id}>
//         {el.title}
//       </li>
//     ))}
//   </ul>
// );
export default connect(mapStateToProps,mapDispatchToProps)(Article);