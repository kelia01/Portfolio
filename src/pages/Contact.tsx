  import { useState } from "react";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let data = { name, email, subject, message };
    try{
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      setResponse(response.message);
    } catch(err) {
      console.error(err);
      setResponse('failed to get it');
    }
  };


export const Contact = () => {
  return (
    <div className="">
            <h2 className="font-[Lora] text-3xl text-green-200 font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-30 h-[2px] bg-amber-300 text-amber-300"></div>
            <p className="text-green-200 mt-5 font-semibold text-base">
              Have a sweet project in mind or just saying hello! <br /> Feel
              free to send a message!
            </p>
            <div className="flex flex-col space-y-4 text-green-200 font-bold text-lg mt-7">
              <label htmlFor="name" className="">
                NAME
              </label>
              <input
                type="text"
                name="name"
                className="rounded bg-gray-100 opacity-30 text-white w-96 py-1"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email" className="">
                EMAIL
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="rounded bg-amber-500 opacity-30 text-white w-96 py-1"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="subject" className="">
                SUBJECT
              </label>
              <input type="text" name="subject" placeholder="Enter your subject" 
              onChange={(e) => setSubject(e.target.value)}/>
              <label htmlFor="message" className="">
                MESSAGE
              </label>
              <textarea name="" maxLength={60} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button
              className="border-1 border-amber-300 text-amber-300 font-bold text-lg p-2 mt-6 hover:bg-amber-300/80 hover:text-purple-900"
              onClick={handleSubmit}
            >
              SEND MESSAGE
            </button>

            {response && <p className="text-base text-amber-300">{response}</p>}
          </div>
  )
}
