import React from 'react'; // Knows how to work with react components
import ReactDOM from 'react-dom'; // Separate library to render in DOM

// Create mew component. This component should product some HTML
const App = () => {
       return <div>Hi!</div>;
}

// Take this copononent/s generated HTML and put it on onthe page (in the DOM)

// App is a class to make an instance it should be wrapped in jsx tags <App />
ReactDOM.render(<App />, document.querySelector('.container'));
