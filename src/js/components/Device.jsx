import React from 'react';


function Device(props) {
  let array = [];
  for(let i = 0; i < props.items.length; i++) {
    array.push(
      <Item key={i} item={props.items[i]} />
    );
  }
    return  <div className = "Deivce">
                 <h1> Hello {props.name}</h1>
                <h2>o07h youre, {props.age}</h2>
                
        </div>
      
  }
  
  export default Device;