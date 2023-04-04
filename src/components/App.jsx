import React from "react";

function App() {
  const [mouseovered, setmouseove] = React.useState(false);
  const [fullname, setFullName] = React.useState({
    Fname: "",
    Lname: ""
  });
  /*function clicked() {
    console.log("I have been clicked");
    setmycontent("I have been clicked");
  }*/

  function handlechange(event) {
    //const name = event.target.name;
    //const value = event.target.value;
    const { name, value } = event.target;
    setFullName((prevValue) => {
      //You cannot use events here
      return {
        ...prevValue,
        [name]: value
      };
      //console.log(prevValue);
    });
    //It can  be further shorten down
  }
  // console.log(name);
  //console.log(event.target.placeholder);
  // console.log(event.target.type);
  function setmouseovered() {
    setmouseove(true);
  }
  function setmouseout() {
    setmouseove(false);
  }

  return (
    <div className="container">
      <h1>
        Welcome {fullname.Fname} {fullname.Lname}
      </h1>
      <input
        name="Fname"
        onChange={handlechange}
        type="text"
        placeholder="First Name"
      />
      <input
        name="Lname"
        onChange={handlechange}
        type="text"
        placeholder="Last Name"
      />
      <button
        style={{ backgroundColor: mouseovered ? "Black" : "White" }}
        // onClick={clicked}
        onMouseOver={setmouseovered}
        onMouseOut={setmouseout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
