import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Home from "./components/Home";
import MatchPage from "./components/MatchPage";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
`

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Maria-Eduarda-Lopes-Silveira/clear"


function App() {
  const [page, setPage] = useState("Home")

  const changePage = () => {

    switch (page) {
      case "Home":
        return <Home nextPage={nextPage} resetar={clearApp}></Home>
      case "MatchPage":
        return <MatchPage backPage={backPage}></MatchPage>
      default:
        return <Home></Home>
    }
  }

  const nextPage = () => {
    setPage("MatchPage")
  }

  const backPage = () => {
    setPage("Home")
  }


  const clearApp = () => {
    const headers = {
      headers:
      {
        "Content-Type": "application/json"
      }
    }

    axios
      .put(url, headers)
      .then((res) => {
        alert("Lista de matches resetados com sucesso! Tá feliz? Vamos começar de novo!")
      })
      .catch((err) => {
        alert("Puxa, algo deu errado aqui...")
      })

  }





  return (
    <div>
      <GlobalStyle />
      {changePage()}
    </div>
  )
}

// export default App;
// import { useState } from "react";
// import Modal from "react-modal";
// import "./App.css";

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#root");

// function App() {
//   const [modalIsOpen, setIsOpen] = useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div className="Container">
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Example Modal"
//         overlayClassName="modal-overlay"
//         className="modal-content"
//       >
//         <h2>Hello - I am a modal!</h2>
//         <hr />
//         <p>
//           We maintain that accessibility is a key component of any modern web
//           application. As such, we have created this modal in such a way that it
//           fulfills the accessibility requirements of the modern web. We seek to
//           keep the focus on accessibility while providing a functional, capable
//           modal component for general use.
//         </p>
//         <button onClick={closeModal}>Close</button>
//       </Modal>
//     </div>
//   );
// }

export default App;