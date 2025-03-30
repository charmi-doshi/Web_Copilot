import React from 'react';

const InputForm = ({ input, setInput, handleSubmit }) => {
  return (
    <div className="bg-white p-4 shadow-md flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message..."
      />
      <button
        onClick={handleSubmit}
        className="ml-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default InputForm;
