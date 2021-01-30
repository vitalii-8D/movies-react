import React from "react";
import {Provider} from 'react-redux';

import {appStore} from "./redux-store/store";

import './App.scss';
import MainApp from "./components/main-app/MainApp";

class App extends React.Component {

   render() {

      return (
         <div className="App">
            <Provider store={appStore}>
               <MainApp/>
            </Provider>
         </div>
      );
   }
}

export default App;
