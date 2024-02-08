import { Avatar, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FaBeer, FaCloudversify } from "react-icons/fa";

import "swiper/css";

function PSYCHOLOGYADULTS() {
  return (
    <>
      <main>
        <div className="landing">
          <Container maxWidth="md" className="landing_text">
            <Typography variant="h1" textAlign="center">
              Get Help, Get Better
              <Typography variant="h2" color="warning.main">
                You Deserve to be Happy
              </Typography>
            </Typography>
            <Typography variant="h5" textAlign="center">
              Lorem ipsum dolor sit amet consectetur. Amet velit convallis amet
              mi leo aliquet in vestibulum consectetur. Lectus magna eleifend{" "}
            </Typography>
          </Container>
        </div>
      </main>
      <section>
        <Container className="services">
          <Typography variant="title" color="danger.main" >
            Adults Psychology Services
          </Typography>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="services_items"
          >
            <div className="services_item">
              <FaCloudversify className="services_item_icon" />
              <span>Depression</span>
            </div>
          </Grid>
        </Container>
      </section>
      <section>
        <div className="short-description">
          <Image
            src="/img/psychologyadults/Rectangle-67.png"
            alt="Rectangle"
            width={400}
            height={928}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis
            sit tortor proin proin sagittis. Id nec suspendisse lacus erat.
            Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor
            sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl
            phasellus viverra quisque egestas in nec luctus ornare amet. In
            pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat
            eu leo potenti semper id. Sed elementum eget adipiscing nisl in
            vestibulum. Volutpat.
          </p>
          <ui>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ui>
        </div>
      </section>
      <section>
        <div className="info-doctors">
          <h1>SwiperJs</h1>

          <FaBeer />
        </div>
      </section>
      <section>
        <div className="adults-article">
          <div className="adults-article-top">
            <span>
              Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis
              sit tortor proin proin sagittis. Id nec suspendisse lacus erat.
              Vivamus orci bibendum at purus elit. Vel vehicula donec amet a
              dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim.
              Nisl phasellus viverra quisque egestas in nec luctus ornare amet.
              In pellentesque volutpat urna ultrices vitae. Sed magna vitae
              placerat eu leo potenti semper id. Sed elementum eget adipiscing
              nisl in vestibulum. Volutpat.In pellentesque volutpat urna
              ultrices vitae. Sed magna vitae placerat eu leo potenti semper id.
              Sed elementum.
            </span>
          </div>
          <div className="adults-article-bottom">
            <span>
              Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis
              sit tortor proin proin sagittis. Id nec suspendisse lacus erat.
              Vivamus orci bibendum at purus elit. Vel vehicula donec amet a
              dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim.
              Nisl phasellus viverra quisque egestas in nec luctus ornare amet.
              In pellentesque volutpat urna ultrices vitae. Sed magna vitae
              placerat eu leo potenti semper id. Sed elementum eget adipiscing
              nisl in vestibulum. Volutpat.
            </span>
            <span>
              In pellentesque volutpat urna ultrices vitae. Sed magna vitae
              placerat eu leo potenti semper id. Sed elementum eget adipiscing
              nisl in vestibulum. Volutpat.
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="comments-patients">
          <h1>Swiper</h1>
        </div>
      </section>
    </>
  );
}

export default PSYCHOLOGYADULTS;
