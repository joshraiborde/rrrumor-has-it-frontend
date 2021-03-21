import React from 'react';
import '../stylesheet/view_post.css';
import {connect} from 'react-redux';
import '../stylesheet/view_post.css';
import {createPosts} from '../store/actions/postsAction'

class PostRumour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Enter a Rumour here..."
    };
    this.handleChange = this.handleChange.bind(this);



    this.createPostsFunction = this.createPostsFunction.bind(this);
  }
  handleChange(event) {

  this.setState({value: event.target.value});
  }
  createPostsFunction(content){
    this.props.createPosts(content);

  }
  render() {
   return(<div>
   <h1 className="view-posts">Post a Rumour</h1>

   <div className="paper">
    <div className="paper-content">
        <textarea placeholder="Enter Rumour Here..."
        onChange={this.handleChange} autoFocus/>
    </div>
</div>
     <br/>


     <button onClick={() => this.createPostsFunction(this.state.value)} className="view-comments">Create Rumour</button>
   <br/>
   <br/>
   <br/>
   </div>
 )
  }
}
const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {createPosts})(PostRumour)