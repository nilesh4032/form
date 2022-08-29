import {Data} from './data';
import {useState,useEffect, useSyncExternalStore} from 'react';

import React from 'react'

const App = ({label, key, type,options}) => {


let value;
switch(type) {
  case 'input':
    value={
      input:"text"
    }
    break;
    case 'dropdown':
      value={
        options:["a","b","c"]
      }
      break;
      case 'radio':
        value={
       options:["e","d","c"]
        }
       break;
default:
  break
}


  return (
    <div>
       <div>
       


        return(
        <form className='form' >
        
          <label>
            
            <input type="text" name="name" value= "input"/>{value.input}
              <div className='radio'>
            <input type="radio" value ="male" name="status" />{value.options[0]}
            <input type="radio" value = "female"name="status" />{value.options[1]}
            <input type="radio" value ="other" name="status"/>{value.options[2]}
            </div>
            <div className="dropdown">
              <select name='select' id="select">
                <option value="approved">{value.options[0]}</option>
                <option value="pending" >{value.options[1]}</option>
              </select>
            </div>
            <input type="submit" value="Submit"/>
          </label>
          
        </form>
        )
    
      </div>
    </div>
  )
}

export default App
