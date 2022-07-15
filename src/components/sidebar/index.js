import React, { useContext } from "react";
import User from "./user";
import Suggestions from "./suggestions";
import LoggedInUserContext from "../../context/logged-in-user";

export default function Sidebar() {
  const { user: { docId = "", fullName, username, userId, following } = {} } =
    useContext(LoggedInUserContext);

  return (
    <div className="p-4 sm:hidden">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
