import React from 'react';
//import axios from 'axios';
import '../stylesheet/view_post.css';
import {connect} from 'react-redux'
import {getPosts} from '../store/actions/postsAction'
import {deletePosts} from '../store/actions/postsAction'
import {updatePosts} from '../store/actions/postsAction'
import Comment from './postComment';



class Home extends React.Component {
  getValue=0;
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);


    this.deletePostsFunction = this.deletePostsFunction.bind(this);
    this.updatePostsFunction = this.updatePostsFunction.bind(this);
    this.changeLocation = this.changeLocation.bind(this);

    this.state = {
      value: [],
      componentValue:0,
      id:0,

    };


  }

  componentDidMount() {

    this.props.getPosts();








  }
  handleChange(id,event) {
  let a = this.state.value.slice(); //creates the clone of the state
a[id] = event.target.value;
this.setState({value: a});

    }
  updatePostsFunction(id){
    if(!this.state.value[id]){
      alert("Please Enter a value to update")
    }
    else{


   this.props.updatePosts(id,this.state.value[id]);
    }
  }
  deletePostsFunction(id){

    this.props.deletePosts(id);

  }
  changeLocation(id){
   console.log("id in home "+id);
   this.setState({componentValue:1,id:id})
  }


  render() {

    const {posts} = this.props.users
    console.log(posts);
    const getValue=this.state.componentValue;
    console.log(getValue);
    if(getValue===0){
    return (

      <div>
            <h1 className="view-posts">View Posts</h1>
        {posts.map((data, key) => {
            return (
              <div key={key}>
<div  className="card">
  <div className="card-body">
    {/* <h1 className="post-id">Post Id:{data.data.id}</h1> */}
    <h4 className="view-content">Content: {data.data.attributes.content}</h4>

    <input id={data.data.id} type="text" placeholder="Please Update a Post" value={this.state.value[data.data.id]}
        onChange={this.handleChange.bind(this, data.data.id)}  class="cool-one valid"></input>
    <br/>
    <button onClick={() => this.updatePostsFunction(data.data.id)} className="update-posts">Update Posts</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={() => this.deletePostsFunction(data.data.id)} className="delete-comments">Delete Posts</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={this.changeLocation.bind(this,data.data.id)} className="update-posts">Comment</button>

  </div>
</div>
<br/>

              </div>

            );
          })}
          </div>


  )
        }
        else if(getValue===1){
          const id =this.state.id
          console.log("state"+id);

          return(<Comment id={id}/>);
        }

}
}
const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getPosts,deletePosts,updatePosts})(Home)