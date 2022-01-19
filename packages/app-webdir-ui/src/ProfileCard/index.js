import React from "react";

import { Button } from "../../../components-core/src/components/Button";
import anonPic from "../assets/anon.png";
// import { ProfileCardTemplate } from "./index.styles";
import { profileCardType } from "./models";

const ProfileCard = ({ ...props }) => {
  let titles = null;
  if (props.titles?.length > 0 && props.size === "micro") {
    titles = <span>{props.titles[0].name}</span>;
  } else if (props.titles?.length > 0 && props.size === "large") {
    titles = props.titles.map(title => (
      <h4 key={title}>
        <span>{title}</span>
      </h4>
    ));
  }
  return (
    <div
      className={`uds-person-profile uds-content-align ${props.size} ${
        props.fill ? "fill" : ""
      }`}
    >
      <div className="profile-img-container">
        <div
          className="profile-img-placeholder"
          style={{ backgroundImage: `url(${anonPic})` }}
        >
          <img className="profile-img" src={props.imgURL} alt={props.name} />
        </div>
      </div>
      <div className="person">
        <h3 className="person-name">{props.name}</h3>
        {props.size !== "large" && (
          <h4 className="person-profession">{props.title}</h4>
        )}
        {["large", "micro"].includes(props.size) && (
          <div className="person-profession">{titles}</div>
        )}
        {props.size !== "micro" && (
          <ul className="person-contact-info">
            <li>
              <a href={`mailto:${props.email}`} aria-label="Email user">
                {props.email}
              </a>
            </li>
            <li>
              <a href={`tel:${props.telephone}`} aria-label="Call user">
                {props.telephone}
              </a>
            </li>
            <li>
              <a href={props.addressLink} aria-label="See user address">
                <address className="person-address">
                  <span className="person-street">{props.addressLine1}</span>
                  <span className="person-city">{props.addressLine2}</span>
                </address>
              </a>
            </li>
          </ul>
        )}
        {["default", "large"].includes(props.size) && (
          <div>
            <p className="person-description">{props.shortBio.slice(0, 250)}</p>
            <ul className="person-social-medias">
              <li>
                <a
                  href={props.facebookLink}
                  aria-label="Go to user Facebook profile"
                >
                  <span className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a
                  href={props.linkedinLink}
                  aria-label="Go to user Linkedin profile"
                >
                  <span className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href={props.twitterLink}
                  aria-label="Go to user Twitter profile"
                >
                  <span className="fab fa-twitter-square" />
                </a>
              </li>
            </ul>
          </div>
        )}
        {props.size === "small" && (
          <Button color="maroon" size="small" label="View Profile" />
        )}
        {props.size === "micro" && (
          <a href="/asu-knowledge-enterprise">ASU Knowledge Enterprise</a>
        )}
      </div>
    </div>
  );
};

ProfileCard.propTypes = profileCardType;

export { ProfileCard };
