// 追加したい新しい情報はこちらを利用します。
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class PostsForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      imsi:""
    };

    this.onChange =this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value //json特殊
    });
  }
  onSubmit(e){
      e.preventDefault();
      const post={
        name:this.state.name,
        imsi:this.state.imsi          
      };
      console.log(post);
      fetch("http://localhost:8080/device",{
        method :'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(this.state)
      })
      .then(res=>res.json())
      .then(data=>console.log(data));
}

  render() {
    const {name,imsi} = this.state;
    const {onChange,onSubmit} = this;
    
    return (
      <div>
        <h4>Update New SIMS</h4>
        <form onSubmit={onSubmit}>
          <div>
            
            <label>名称:</label>
            <input type="text" name="name" value={name} onChange={onChange}/>
            <label>IMSI:</label>
            <input type="text" name="imsi" value={imsi} onChange={onChange}/>
            </div>


          <div><Button type="submit" color="danger">SUBMIT</Button>
          <Button type="button" color="btn btn-success">RELOAD</Button>
         
        
          </div>
        </form>
      </div>
    );
  }
}

export default PostsForm;