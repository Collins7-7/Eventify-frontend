import React from "react";
import "./Aboutus.css";
import music from "../images/music.jpg";
import tech from "../images/tech.jpg";
import buss from "../images/buss.jpg";

function Aboutus() {
  return (
    <div className="container grey">
      <div className="row">
        <div className="col-md-12">
          <h3>About Eventify</h3>
          <p>
            Eventify is an events company that strives to keep people updated on
            all events happening in Nairobi County. <br /> We pride ourselves in
            being an all round company that deals with events categories.We look
            forward to connecting people from all walks of life.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={tech} alt="Banner" />
            <div class="card-body">
              <h5 class="card-title">Technology</h5>
              <p className="card-text ">
                Tech is the future! At Eventify we hook you up with all tech
                related events such as Hackathons.We give you all the
                information that helps you prepare for tech events. We ensure
                that we give best prices for anyone attending our events.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={buss} alt="Banner" />
            <div className="card-body">
              <h5 className="card-title">Business</h5>
              <p className="card-text ">
                Business? We got you! Eventify helps you sell your business, in
                business events. We ensure to hook you up with the best where
                you can get investors This gives you a networking platform as
                well as marketing. Sell your business and network!
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={music} alt="Banner" />
            <div className="card-body">
              <h5 className="card-title">Music</h5>
              <p className="card-text ">
                Eventify ensures that you are updated on all your best artist's
                performances. We make sure that all the music event all around
                the year are on our app. This includes making tickets timely so
                you dont miss out.
                You are welcome.
              </p>
            </div>
          </div>
        </div>
        <div className="port">
          <h3>Our Events Portfolio</h3>
          <p>
            Our portfolio and experiences are vast. However, one fact remains
            true for all our events creating a perfect experience for your
            guests is our top priority. Whatever your event requirements, budget
            or location, Eventify guarantees maximum engagement and an
            unforgettable guest experience.
          </p>
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <ul>
                <li>Meetings</li>
                <li>Hybrid & Virtual Events</li>
                <li>Private Dining</li>
                <li>Drinks Receptions</li>
                <li>Graduation parties</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4">
              <ul>
                <li>Christmas & Seasonal Parties</li>
                <li>Awards Ceremonies</li>
                <li>Team Building</li>
                <li>Exhibitions</li>
                <li>Networking Events</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4">
              <ul>
                <li>Wellness Occasions</li>
                <li>Corporate Hospitality</li>
                <li>Training Sessions</li>
                <li>Launch Events</li>
                <li>Private Functions</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4">
              <ul>
                <li>Event coordination</li>
                <li>Event reporting </li>
                <li>Guest management</li>
                <li>Events Ticketing</li>
                <li>Event rehearsal</li>
              </ul>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
