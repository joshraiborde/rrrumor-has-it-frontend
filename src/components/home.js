import React from 'react';

import '../stylesheet/view_post.css';
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/postsAction'




class Home extends React.Component {
    state = {
        posts: []
      }

  componentDidMount() {

    this.props.getUsers();







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
    <br/>
    <button className="view-comments">View Comments</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button className="delete-comments">Delete Comments</button>
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

export default connect(mapStateToProps, {getUsers})(Home)