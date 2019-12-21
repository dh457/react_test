import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Partial from './TypeScriptTest/Peir' 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('check Partial How It workd',()=>{
  let todo1 : Partial.ToDo = new Partial.ToDo;
  let todo2 : Partial.ToDo = new Partial.ToDo;

  todo1.title = "asdasda";
  todo1.description = "aaaaaa";

  let result  = Partial.updateToDo(todo1,{description: 'I am here'});

});
