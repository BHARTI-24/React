import React, { Component } from 'react'

//here the exporting ve performed here only
// export default 
class Todo extends Component {    
    //initialization of the constructor
    constructor(){
        super();
        this.state={
            tasks:[{task:'Check mails',id:1},{task:'Read Article',id:2},{task:'HW',id:3}],
            currTask:''
        }
    }

    //definition of the functions
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState=({
            currTask:e.target.value
        })
    }
    

    handleSubmit = () => {
        this.setState({
            tasks:
            [...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:''
        })
    }


    handleDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id!=id
        })
        this.setState({
            tasks:[...narr]
        })
    }

  render() {
    console.log('render')

    return (
      <div>
          <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>  
          <ul>
          {
              this.state.tasks.map(function(taskObj){
                  return(
                  //providing id
                  <li key={taskObj.id}>
                      <p>{taskObj.task}</p>
                      <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
                      
                  </li>
              )
          }.bind(this)
              )
        }
          </ul>
      </div>
    );
  }
}

export default Todo;

//  export const arr = [1,2,3]