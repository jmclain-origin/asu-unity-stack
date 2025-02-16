import React from "react";

import { trackGAEvent } from "../core/services/googleAnalytics";
import { ProfileCardLayout } from "./index.styles";
import { profileCardType } from "./models";

const ProfileCard = ({ ...props }) => {
  let title = props.matchedAffiliationTitle
    ? `${props.matchedAffiliationTitle}, `
    : "";
  if (props.matchedAffiliationDept && props.size !== "micro") {
    title += props.matchedAffiliationDept;
  }

  const hideNonExistantImages = e => {
    e.target.style.display = "none";
  };
  let formattedTelephone = props.telephone;
  if (formattedTelephone) {
    const phoneArea = formattedTelephone.slice(0, 3);
    const phoneNumber = formattedTelephone.slice(3).replace("/", "");
    formattedTelephone = `${phoneArea}-${phoneNumber}`;
  }

  const microLinkText = "ASU Knowledge Enterprise";
  const sendEvent = () => {
    trackGAEvent({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      section: props.name,
      text: microLinkText,
      component: props.GASource,
    });
  };
  return (
    <ProfileCardLayout
      className={`uds-person-profile ${props.size} ${props.fill ? "fill" : ""}`}
    >
      <a href={props.profileURL} className="profile-img-container">
        <div className="profile-img-placeholder">
          <img
            className="profile-img"
            src={props.imgURL} // TODO: This prop can potentially be empty, which can occur due to limitations of the image service. Consequently, the <img> tag would be rendered without its "src" attribute, which is not a good practice and should be avoided.
            alt={props.name}
            onError={hideNonExistantImages}
          />
        </div>
      </a>
      <div className="person">
        {props.profileURL && (
          <a href={props.profileURL}>
            <span className="person-name">{props.name}</span>
          </a>
        )}
        {!props.profileURL && <h3 className="person-name">{props.name}</h3>}
        <div className="person-profession">
          <h4>{title}</h4>
        </div>
        {props.size !== "micro" && (
          <ul className="person-contact-info">
            <li>
              <a
                onClick={() => sendEvent(props.email.toLowerCase())}
                href={`mailto:${props.email.toLowerCase()}`}
                aria-label="Email user"
              >
                {props.email.toLowerCase()}
              </a>
            </li>
            <li>
              <a
                onClick={() => sendEvent(formattedTelephone)}
                href={`tel:${formattedTelephone}`}
                aria-label="Call user"
              >
                {formattedTelephone}
              </a>
            </li>
            <li>
              <div aria-label="See user address">
                <address className="person-address">
                  <span className="person-street">{props.addressLine1}</span>
                  <span className="person-city">{props.addressLine2}</span>
                </address>
              </div>
            </li>
          </ul>
        )}
        {["default", "large"].includes(props.size) && (
          <div>
            <p className="person-description">
              {props.shortBio?.slice(0, 250)}
            </p>
            <ul className="person-social-medias">
              {props.facebookLink && (
                <li>
                  <a
                    onClick={() => sendEvent("facebook icon")}
                    href={props.facebookLink}
                    aria-label="Go to user Facebook profile"
                  >
                    <span
                      className="fab fa-facebook-square"
                      title="Facebook Link"
                    />
                  </a>
                </li>
              )}
              {props.linkedinLink && (
                <li>
                  <a
                    onClick={() => sendEvent("linkedin icon")}
                    href={props.linkedinLink}
                    aria-label="Go to user Linkedin profile"
                  >
                    <span className="fab fa-linkedin" title="LinkedIn Link" />
                  </a>
                </li>
              )}
              {props.twitterLink && (
                <li>
                  <a
                    onClick={() => sendEvent("twitter icon")}
                    href={props.twitterLink}
                    aria-label="Go to user Twitter profile"
                  >
                    <span
                      className="fab fa-square-x-twitter"
                      title="Twitter Link"
                    />
                  </a>
                </li>
              )}
              {props.website && (
                <li>
                  <a
                    onClick={() => sendEvent("website icon")}
                    href={props.website}
                    aria-label="Go to user Website"
                  >
                    <span className="fa fa-globe" title="User Website Link" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
        {props.size === "small" && (
          <a
            className="btn btn-maroon btn-md"
            href={props.profileURL}
            role="button"
          >
            View Profile
          </a>
        )}
        {props.size === "micro" && props.matchedAffiliationDept && (
          <div>{props.matchedAffiliationDept}</div>
        )}
      </div>
    </ProfileCardLayout>
  );
};

ProfileCard.propTypes = profileCardType;

export { ProfileCard };
