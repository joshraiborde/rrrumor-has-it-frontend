import React from 'react';
import '../stylesheet/view_post.css';
import {getSinglePosts} from '../store/actions/postsAction'
import {createComments} from '../store/actions/postsAction'
import {connect} from 'react-redux'

class PostComment extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        data: null,
        value:null
      }
      this.setState({data:null})
      const id=this.props.id
    console.log(id
        );
        this.handleChange = this.handleChange.bind(this);
        this.PostComment = this.PostComment.bind(this);
        this.PostCommentEnter = this.PostCommentEnter.bind(this);
    }

    handleChange(event) {
        this.setState({value:event.target.value})
    }

    PostComment(id,value){
       console.log("clicked");
        this.props.createComments(id,value);
    }

    PostCommentEnter(e,id,value){
        if(e.key==="Enter"){
            this.props.createComments(id,value);
        }
    }

    componentDidMount() {
        this.props.getSinglePosts(this.props.id);
    }

    render() {
         const {posts} = this.props.singles
         console.log(posts);
         if(posts.data){
             return (
             <div>
                <div>
                    <div>
                        <div className="card">
                            <div className="card-body">
                            {/* <h1 className="post-id">Post Id:{posts.data.id}</h1> */}
                                <h4 className="view-content">Rumour: {posts.data.attributes.content}</h4>
                                <input  type="text" placeholder="Comment Here"
                                    onChange={this.handleChange.bind()}
                                    onKeyPress={(e) => this.PostCommentEnter(e,posts.data.id,this.state.value)}
                                    value={this.state.value} class="cool-one valid"></input>
                                <br/>
                                <button onClick={() => this.PostComment(posts.data.id,this.state.value)}
                                        className="delete-comments">Post A Comment</button>
                                </div>
                        </div>

                        <br/>
                    </div>
                </div>
            <br/>
            <br/>

            {posts.data.attributes.comments?
            posts.data.attributes.comments.map(animal => (
                <div>
                <div class="card">
                <div className="card-body">
                <h4 className="view-content">{animal.content}</h4> <br/>
                  </div>
                  </div>
                  <br/>
                  </div>

      )):
      <h1 className="no-comments">NO COMMENTS</h1>}

      </div>);
         }
         else{
             return(
             <h1>Don't start Rumours, it's bad for you...</h1>   
                )
         }
    }
  }
  const mapStateToProps  = (state) => ({singles:state.singles})

export default connect(mapStateToProps, {getSinglePosts,createComments})(PostComment)