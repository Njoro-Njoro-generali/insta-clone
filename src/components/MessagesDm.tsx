const MessagesDm = ({ createdMessages }: any) => {
  return (
    <div className="messages-dm">
      <div className="messages-intro">
        <p>Messages</p>
        <p>
          <a href="requests" className="link">
            Requests
          </a>
        </p>
      </div>
      <div className="the-messages">{createdMessages()}</div>
    </div>
  );
};

export default MessagesDm;
