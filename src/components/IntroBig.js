import React from "react";
import { Container } from "react-bootstrap";
import me from "../images/me2022.jpg";

const IntroBig = () => {
  return (
    <Container>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "10px",
          rowGap: "10px",
        }}
      >
        <h1
          style={{
            gridColumn: "1/-1",
            borderBottom: "1px solid black",
            color: "black",
            display: "inline-block",
            textAlign: "left",
            fontWeight: "lighter",
            padding: "10px",
            margin: "10px",
            marginBottom: "50px",
          }}
        >
          <a
            style={{ marginRight: "10px" }}
            href="https://icons8.com/icon/59800/handshake"
          >
            <img
              alt={{}}
              src="https://img.icons8.com/ios-glyphs/60/000000/handshake.png"
            />
          </a>
          Introduction
        </h1>
      </Container>
      <Container
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          marginBottom: "100px",
        }}
      >
        <div class="profile-pic">
          <img
            src={me}
            alt="me"
            style={{
              width: "350px",
              borderRadius: "50%",
              marginRight: "10px",
              margin: "5px",
            }}
          />
        </div>
        <div
          class="bio-text"
          style={{
            flexGrow: "1",
            textAlign: "left",
            marginLeft: "40px",
          }}
        >
          <h1>Luke Scheller</h1> <h6>Designer | Developer | Artist</h6>
          <div
            class="icons"
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <a href="https://icons8.com/icon/17854/windows-xp">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/windows-logo.png"
              />
            </a>
            <a href="https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code-2019">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
              />
            </a>
            <a href="https://icons8.com/icon/20909/html-5">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              />
            </a>
            <a href="https://icons8.com/icon/21278/css3">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/css3.png"
              />
            </a>
            <a href="https://icons8.com/icon/84710/bootstrap">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/bootstrap.png"
              />
            </a>
            <a href="https://icons8.com/icon/108784/javascript">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              />
            </a>
            <a href="https://icons8.com/icon/asWSSTBrDlTW/react-a-javascript-library-for-building-user-interfaces">
              <img
                alt={{}}
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              />
            </a>
            <a href="https://icons8.com/icon/jD-fJzVguBmw/redux">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/redux.png"
              />
            </a>
            <a href="https://icons8.com/icon/hsPbhkOH4FMe/node-js">
              <img
                alt={{}}
                src="https://img.icons8.com/fluency/48/000000/node-js.png"
              />
            </a>
            <a href="https://icons8.com/icon/13677/adobe-photoshop">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png"
              />
            </a>
            <a href="https://icons8.com/icon/13631/adobe-illustrator">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png"
              />
            </a>
            <a href="https://icons8.com/icon/13675/adobe-indesign">
              <img
                alt={{}}
                src="https://img.icons8.com/color/48/000000/adobe-indesign--v1.png"
              />
            </a>
          </div>
          <p style={{ marginTop: "5px" }}>
            My name is Luke. From a very early age, I knew that I wanted to join
            the creative industry. My journey as an artist began with figure
            drawing and pointillism. I love the technicalities and process of
            illustrating a scene out of my imagination or copying a still life.
            After moving back to Minnesota from Las Vegas I decided to learn
            more about Adobe applications such as Photoshop and Illustrator. My
            most recent graphic design project has been creating t-shirt designs
            and logos with my business partner. Together, we founded the label
            Ninety-One. During my time at Minneapolis Community and Technical
            College, I discovered my interest in web development. My code of
            choice for the past 2 years has been Javascript—specifically React
            JS. My work is, now, dedicated to web development. I love the
            challenge and process of writing and learning to write efficient
            code! My long term professional goal is to become a senior full
            stack web developer/software engineer at a skateboarding company
            such as Thrasher, Zumiez, or CCS! <br />
            <br />
            Thanks for taking the time to read my bio!
            <br />
            Contact: lukescheller1991@outlook.com | 651-207-7638
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default IntroBig;
