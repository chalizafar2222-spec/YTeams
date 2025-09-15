// import React, { useState } from "react";
// import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

// export default function WhatsAppChatBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello! 👋 Welcome to our support. How can I help you?" },
//   ]);
//   const [input, setInput] = useState("");

//   const toggleChat = () => setIsOpen(!isOpen);

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     // Add user message
//     const newMessages = [...messages, { sender: "user", text: input }];
//     setMessages(newMessages);
//     setInput("");

//     // Simulate bot reply
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "Thanks for your message! 😊 Our team will reply soon." },
//       ]);
//     }, 1000);
//   };

//   return (
//     <div>
//       {/* Floating WhatsApp Button */}
//       <button
//         onClick={toggleChat}
//         className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
//       >
//         {isOpen ? (
//           <FaTimes className="text-white text-2xl" />
//         ) : (
//           <FaWhatsapp className="text-white text-2xl" />
//         )}
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl border overflow-hidden z-50 flex flex-col">
//           {/* Header */}
//           <div className="bg-green-600 text-white p-3 font-semibold flex items-center gap-2">
//             <FaWhatsapp /> Live Chat
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-100">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
//                   msg.sender === "user"
//                     ? "bg-green-500 text-white ml-auto"
//                     : "bg-white text-gray-800 shadow"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="flex items-center p-2 border-t bg-white">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type a message..."
//               className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none"
//             />
//             <button
//               onClick={sendMessage}
//               className="ml-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
//             >
//               <FaPaperPlane />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  // Your WhatsApp number without + sign
  const phoneNumber = "923081122334";  

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    // Open WhatsApp with pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(input)}`;
    window.open(url, "_blank");

    setInput("");
  };

  return (
    <div>
      {/* Floating WhatsApp Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
      >
        {isOpen ? (
          <FaTimes className="text-white text-2xl" />
        ) : (
          <FaWhatsapp className="text-white text-2xl" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl border overflow-hidden z-50 flex flex-col">
          {/* Header */}
          <div className="bg-green-600 text-white p-3 font-semibold flex items-center gap-2">
            <FaWhatsapp /> Chat with Us
          </div>

          {/* Input */}
          <div className="flex items-center p-2 border-t bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
