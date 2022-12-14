import React, { useState, useEffect } from "react";
import "../App.css";
import { Navigate, useNavigate } from "react-router-dom";
import About from "./pages/About";

const Intro = () => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-out",
    done: false,
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.done === false) {
        if (fadeProp.nextFlag === true) {
          if (fadeProp.fade === "fade-in") {
            setFadeProp({
              fade: "fade-out",
              text: "Welcome to my Portfolio",
              nextFlag: false,
              done: true,
            });
          } else {
            setFadeProp({
              fade: "fade-in",
              text: "Welcome to my Portfolio",
              nextFlag: true,
              done: false,
            });
          }
        } else {
          if (fadeProp.fade === "fade-in") {
            setFadeProp({
              fade: "fade-out",
              text: "Hello",
              nextFlag: true,
              done: false,
            });
          } else {
            setFadeProp({
              fade: "fade-in",
              text: "Hello",
              nextFlag: false,
              done: false,
            });
          }
        }
      } else {
        setFadeProp({
          transition: true,
          fade: "fade-in",
          text: "I'm Colin Brooks, a full-stack web developer.",
          text2: "Use the links above to view my work!",
          done: true,
        });
      }
    }, 1500);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  const introStyle = {
    width: "100%",
    height: "75vh",
    marginTop: "20vh",
  };

  return (
    <div style={introStyle}>
      <h1 className={fadeProp.fade}>{fadeProp.text}</h1>
      <h2 className={fadeProp.fade}>{fadeProp.text2}</h2>
    </div>
  );
};

export default Intro;
