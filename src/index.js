import React from 'react';
import ReactDOM from 'react-dom'; 

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; 

const API_KEY = 'AIzaSyBSgQJZxZyaxppVghptlXUoXkS9NB59gCk';

YTSearch({    key: API_KEY,    term: 'surfboards'},    function(data) {
        console.log(data);
});
// Create mew component. This component should product some HTML
const App = () => {
       return (
       <div>
           <SearchBar />
       </div>
       );
}

// Take this copononent/s generated HTML and put it on onthe page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
