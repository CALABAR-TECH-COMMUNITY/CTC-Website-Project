import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Events from './Events'
import './App.css'

function App() {
	let component;

	// switch statement to call components
	switch(window.location.pathname) {
	  case "/Events": component = <Events/>;
	  break;
	  default:
		break;
	}
	return (
	  <>
	   
	   {component}
	   
	 
	  </>
	)
}

export default App
