import React from 'react';
//import axios from 'axios';
import '../stylesheet/view_post.css';
import {connect} from 'react-redux'
import {getPosts} from '../store/actions/postsAction'
import {deletePosts} from '../store/actions/postsAction'
import {updatePosts} from '../store/actions/postsAction'



class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);


    this.deletePostsFunction = this.deletePostsFunction.bind(this);
    this.updatePostsFunction = this.updatePostsFunction.bind(this);
    this.state = {
      value: []
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


  render() {
    const {posts} = this.props.users


    return (
      <div>
            <h1 className="view-posts">View Posts</h1>
        {posts.map((data, key) => {
            return (
              <div key={key}>
<div className="card">
  <div className="card-body">
    <h1 className="post-id">Post Id:{data.data.id}</h1>
    <h4 className="view-content">Content:{data.data.attributes.content}</h4>

    <input id={data.data.id} type="text" placeholder="Please Update a Post" value={this.state.value[data.data.id]}
        onChange={this.handleChange.bind(this, data.data.id)}  class="cool-one valid"></input>
    <br/>
    <button onClick={() => this.updatePostsFunction(data.data.id)} className="update-posts">Update Posts</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={() => this.deletePostsFunction(data.data.id)} className="delete-comments">Delete Posts</button>
  </div>
</div>
<br/>

              </div>

            );
          })}
          </div>


  )
}
}
const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getPosts,deletePosts,updatePosts})(Home)