import React from 'react';
import '../stylesheet/view_post.css';
import {connect} from 'react-redux'
import {getPosts} from '../store/actions/postsAction'
import {deletePosts} from '../store/actions/postsAction'
import {updatePosts} from '../store/actions/postsAction'
import Comment from './postComment';
class Home extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.deletePostsFunction = this.deletePostsFunction.bind(this);
    this.updatePostsFunction = this.updatePostsFunction.bind(this);
    this.commentFunction = this.commentFunction.bind(this);

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

  commentFunction(id){
   console.log("id in home "+id);
   this.setState({componentValue:1,id:id})
  }


  render() {
    const {posts} = this.props.users
    console.log(posts);
    const getValue=this.state.componentValue;
    console.log(getValue);
    if (getValue == 0){
    return (
      <div>
            <h1 className="view-posts">Rumours</h1>
            {posts.map((data, key) => {
              return (
                <div key={key}>
                  <div  className="card">
                    <div className="card-body">
                      {/* <h1 className="post-id">Post Id:{data.data.id}</h1> */}
                      <h4 className="view-content">Rumour: {data.data.attributes.content}</h4>
                        <input id={data.data.id} type="text" placeholder="Update Rumour"
                          value={this.state.value[data.data.id]}
                          onChange={this.handleChange.bind(this, data.data.id)}  class="cool-one valid"></input>
                        <br/>
                        <button onClick={() => this.updatePostsFunction(data.data.id)} // update posts
                          className="update-posts">Update Rumour</button>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => this.deletePostsFunction(data.data.id)} // delete posts
                          className="delete-comments">Delete Rumour</button>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={this.commentFunction.bind(this,data.data.id)} // comment
                          className="update-posts">Comment</button>
                      </div>
                  </div>
                    <br/>
                </div>
                );
              })}
                  </div>
      )
      }
        else if(getValue==1){
          const id =this.state.id
          console.log("state"+id);
          if(this.componentValue===1){
            this.setState({componentValue:0});
            getValue=this.state.componentValue;
          }

          return(<Comment id={id}/>);
        }}
      }
const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getPosts,deletePosts,updatePosts})(Home)