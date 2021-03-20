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


    }
    handleChange(event) {
        this.setState({value:event.target.value})
    }
    PostComment(id,value){
        this.props.createComments(id,value);
    }
    componentDidMount() {

        this.props.getSinglePosts(this.props.id);



     /*   axios.get(`http://localhost:3000/posts`)
        .then(res => {
            const posts = res.data;
            console.log(posts);
            this.setState({ posts });
        })
        */
    }
    render() {



         const {posts} = this.props.singles
         console.log(posts);


         if(posts.data){

      return (<div>
     <div> <div > <div  className="card"> <div className="card-body">
          <h1 className="post-id">Post Id:{posts.data.id}</h1>
          <input  type="text" placeholder="Please write a Comment"
        onChange={this.handleChange.bind()}  value={this.state.value} class="cool-one valid"></input>
          <h4 className="view-content">Content:{posts.data.attributes.content}</h4> <br/>
           <button onClick={() => this.PostComment(posts.data.id,this.state.value)}  className="delete-comments">Posts A comment</button> </div> </div>
            <br/> </div> </div>
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

      )): <h1 className="no-comments">NO COMMENTS</h1>}


      </div>);
         }
         else{
             return(<h1>Loading</h1>)
         }
    }
  }
  const mapStateToProps  = (state) => ({singles:state.singles})

export default connect(mapStateToProps, {getSinglePosts,createComments})(PostComment)