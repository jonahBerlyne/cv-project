import React, { Component, useState} from "react";
import Info from "./components/Info";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Overview from "./components/Overview";
import uniqid from "uniqid";

// The Parent Component

function App() {

  const initialCv = { id: uniqid(), name: '', email: '', phone: '', college: '', degree: '', subject: '', graduated: '', company: '', position: '', duties: '', yearFrom: '', yearTill: '', };

  const [cv, setCv] = useState(initialCv);

  function handleChange (e) {
    setCv({
        ...cv,
        [e.target.name]: e.target.value,
    });
  }

  function clearForm () {
    setCv({...initialCv});
  }

  const [cvs, setCvs] = useState([]);


  function onSubmit (e) {
    e.preventDefault();
    if (cv.name == "" || cv.email == "" || cv.phone == "" || cv.college == "" || cv.degree == "" || cv.subject == "" || cv.graduated == "" || cv.company == "" || cv.position == "" || cv.duties == "" || cv.yearFrom == "" || cv.yearTill == "") return;
    setCvs(cvs => [...cvs, cv]);
    clearForm();
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {/* <Component myProp={whatThePropIsDoing}/> */}
        <Info cv={cv} onChange={handleChange}/>
        <br/>
        <br/>
        <Education cv={cv} onChange={handleChange}/>
        <br/>
        <br/>
        <Experience cv={cv} onChange={handleChange}/>
        <br/>
        <br/>
        <button type="submit">Submit</button>          
      </form>
      <Overview cvs={cvs}/>
    </div>
  );

}

// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       cv: {
//         id: uniqid(),
//         name: '',
//         email: '',
//         phone: '',
//         college: '',
//         degree: '',
//         subject: '',
//         graduated: '',
//         company: '',
//         position: '',
//         duties: '',
//         yearFrom: '',
//         yearTill: '',
//       },
//       cvs : [],
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({
//       cv: {
//         ...this.state.cv,
//         [e.target.name]: e.target.value,
//       }
//     });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.cv.name == "" || this.state.cv.email == "" || this.state.cv.phone == "" || this.state.cv.college == "" || this.state.cv.degree == "" || this.state.cv.subject == "" || this.state.cv.graduated == "" || this.state.cv.company == "" || this.state.cv.position == "" || this.state.cv.duties == "" || this.state.cv.yearFrom == "" || this.state.cv.yearTill == "") return;
//     this.setState({
//       cvs: this.state.cvs.concat(this.state.cv),
//       cv: {
//         id: uniqid(), 
//         name: '',
//         email: '',
//         phone: '',
//         college: '',
//         degree: '',
//         subject: '',
//         graduated: '',
//         company: '',
//         position: '',
//         duties: '',
//         yearFrom: '',
//         yearTill: '', 
//       },
//     });
//   };

//   render() {
//     const { cv, cvs } = this.state;
//     return (
//       <div className="App">
//         <form onSubmit={this.onSubmit}>
//           {/* <Component myProp={whatThePropIsDoing}/> */}
//           <Info cv={cv} onChange={this.handleChange}/>
//           <br/>
//           <br/>
//           <Education cv={cv} onChange={this.handleChange}/>
//           <br/>
//           <br/>
//           <Experience cv={cv} onChange={this.handleChange}/>
//           <br/>
//           <br/>
//           <button type="submit">Submit</button>          
//         </form>
//         <Overview cvs={cvs}/>
//       </div>
//     );
//   }

// }

export default App;