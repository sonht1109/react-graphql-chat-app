import React from "react";
import Input from "../../../components/Input";
import SFriends, { SFriendItem } from "./styles";
import avt from "../../../assets/images/avt-placeholder.png";

export default function Friends() {
  return (
    <SFriends>
      <div className="friends-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
          <SFriendItem key={index}>
            <img className="avt" alt="avt" src={avt} width={48} height={48} />
            <div className="message">
              <h4 className="username">dp.thaovy {index + 1}</h4>
              <p className="last-message">
                Amet culpa eu est proident aute consectetur. Veniam culpa
                nostrud commodo id dolore proident cillum consectetur fugiat
                nisi. Proident nulla exercitation commodo sit consectetur
                laborum culpa exercitation culpa dolor anim. Irure deserunt duis
                cillum eiusmod. Aliquip sint exercitation est minim aliquip
                eiusmod adipisicing voluptate velit eu laboris ullamco. Ad sunt
                veniam do nulla amet commodo fugiat dolore. Proident qui commodo
                dolor qui consectetur dolore do velit dolore irure eiusmod.
                Occaecat proident nisi sunt nisi eiusmod eiusmod officia duis
                veniam ad. Fugiat eiusmod aute consectetur officia deserunt
                magna occaecat dolor non proident tempor esse minim. Incididunt
                veniam dolore et est incididunt cupidatat in elit ipsum dolore
                id proident.
              </p>
              <span className="created-at">1h</span>
            </div>
          </SFriendItem>
        ))}
      </div>
    </SFriends>
  );
}
