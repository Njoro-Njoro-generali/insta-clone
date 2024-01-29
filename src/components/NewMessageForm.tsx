import { useState } from "react";

const NewMessageForm = ({ createTheMessage, goingBack }: any) => {
  const [messageTo, setMessageTo] = useState("");
  const [messageAbout, setMessageAbout] = useState("");

  const createThatMessage = () => {
    let sender = `images/${messageTo}.jpg`;
    let senderName = messageTo;
    let lastMessage = messageAbout;

    createTheMessage({ sender, senderName, lastMessage });

    setMessageAbout("");
    setMessageTo("");
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createThatMessage();

    goingBack();
  };

  return (
    <div className="new-message-form">
      <form action="POST" className="the-message-form" onSubmit={onSubmit}>
        <input
          type="text"
          id="to"
          placeholder="Send to"
          value={messageTo}
          onChange={(e) => setMessageTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message to send.."
          value={messageAbout}
          onChange={(e) => setMessageAbout(e.target.value)}
        />
        <input type="submit" value="Create Chat" />
      </form>
    </div>
  );
};

export default NewMessageForm;
