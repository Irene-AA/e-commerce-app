import { Carousel } from "react-bootstrap";
import "../css/car.css";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function Tarousel() {
  const navigate = useNavigate();

  function handleArrow() {
    navigate("./misc");
  }
  return (
    <div className="cars-main">
      <div className="cars">
        {" "}
        <Carousel fade pause="hover">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Womens Fashion </h2>
              <ArrowForwardIcon
                onClick={handleArrow}
                style={{ color: "black" }}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1528120369764-0423708119ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Womens Fashion </h2>
              <ArrowForwardIcon onClick={handleArrow} />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Womens Fashion </h2>
              <ArrowForwardIcon
                onClick={handleArrow}
                style={{ color: "black" }}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Womens Fashion </h2>
              <ArrowForwardIcon
                onClick={handleArrow}
                style={{ color: "black" }}
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="cars">
        <Carousel fade pause="hover">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1531938716357-224c16b5ace3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Mens Fashion </h2>
              <ArrowForwardIcon
                style={{ color: "black" }}
                onClick={handleArrow}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Mens Fashion </h2>
              <ArrowForwardIcon
                style={{ color: "black" }}
                onClick={handleArrow}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1611955874253-78c6c3959c41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Mens Fashion </h2>
              <ArrowForwardIcon
                style={{ color: "black" }}
                onClick={handleArrow}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1526887520775-4b14b8aed897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Mens Fashion </h2>
              <ArrowForwardIcon
                style={{ color: "black" }}
                onClick={handleArrow}
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="cars">
        <Carousel fade pause="hover">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1606293459366-910de3594fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY4fHxnYWRnZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Gadgets </h2>
              <ArrowForwardIcon
                style={{ color: "black" }}
                onClick={handleArrow}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1532877590696-69a157b92b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhZGdldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Gadgets </h2>
              <ArrowForwardIcon
                style={{ color: "black" }}
                onClick={handleArrow}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1541677854486-ae7c09ba8c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxnYWRnZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              onClick={handleArrow}
            />
            <Carousel.Caption>
              <h2>Gadgets </h2>
              <ArrowForwardIcon
                style={{ color: "black" }}
                onClick={handleArrow}
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Tarousel;
