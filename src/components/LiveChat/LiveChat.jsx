import { useState } from "react";
import "./LiveChat.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

const LiveChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="live-chat">
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="live-chat__toggle-button"
      >
        <SvgIcon id="icon-chat" className="live-chat__icon-chat" />
      </button>

      {isChatOpen && (
        <div className="live-chat__widget">
          <div className="live-chat__header">
            <div className="live-chat__title-container">
              <SvgIcon id="icon-user" className="live-chat__icon-user" />
              <div className="live-chat__title">
                <h3 className="live-chat__chat-title">eLearning company</h3>
                <p className="live-chat__subtitle">Operator is online</p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)}>
              <SvgIcon id="icon-close" className="live-chat__icon-close" />
            </button>
          </div>
          <div className="live-chat__body">
            {messages.map((message, index) => (
              <div key={index} className="live-chat__message">
                {message.text}
              </div>
            ))}
          </div>
          <div className="live-chat__footer">
            <input
              className="live-chat__input"
              type="text"
              placeholder="Your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <div className="live-chat__buttons">
              <button>
                <SvgIcon className="live-chat__send-icon" id="icon-paperclip" />
              </button>
              <button onClick={handleSendMessage}>
                <SvgIcon
                  className="live-chat__send-icon"
                  id="icon-paper-plane"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
