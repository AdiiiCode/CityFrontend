import React, { useState } from "react";
import axios from "axios";

export default function FeedbackSection({ reference }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://city-server-sable.vercel.app:5000/SendFeedBack`,
        {
          Username:name,
          Useremail:email,
          UserFeedback:Feedback
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div ref={reference}>
      <div className=" min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="w-2/4 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Feedback Form</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="Name">
                Your User Name
              </label>
              <input
                id="Name"
                name="Name"
                placeholder="User Name"
                className="border border-gray-300 w-full p-2 mb-2"
                onChange={(e)=>{
                  setName(e.target.value)
                }}
              ></input>
              <label className="block text-sm font-bold mb-2" htmlFor="Email">
                Your Email
              </label>
              <input
                id="Email"
                name="Emial"
                placeholder="User Name"
                className="border border-gray-300 w-full p-2 mb-2"
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              ></input>
              <label className="block text-sm font-bold mb-2" htmlFor="Email">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Write your feedback here..."
                onChange={(e)=>{
                  setFeedback(e.target.value)
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={handleSubmit}
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
