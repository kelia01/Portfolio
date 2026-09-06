  import { useState } from "react";

  
  
export const Contact = () => {
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

  const inputClass = "w-full rounded-lg border border-white/10 bg-[#243352] px-4 py-2.5 text-[#f0ece4] placeholder-[#6b6358] outline-none focus:border-[#C9A87C]/60 transition";

  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A87C]">05</span>
        <div className="h-px w-10 bg-[#C9A87C]/50" />
        <h2 className="text-xl font-bold tracking-tight text-[#f0ece4]">Get In Touch</h2>
      </div>

      <p className="mb-8 max-w-md leading-7 text-[#b8b0a0]">
        Have a project in mind or just saying hello? Feel free to send a message!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold tracking-wider text-[#C9A87C]">NAME</label>
          <input type="text" name="name" className={inputClass} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold tracking-wider text-[#C9A87C]">EMAIL</label>
          <input type="email" name="email" placeholder="your@email.com" className={inputClass} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold tracking-wider text-[#C9A87C]">SUBJECT</label>
          <input type="text" name="subject" className={inputClass} onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold tracking-wider text-[#C9A87C]">MESSAGE</label>
          <textarea name="message" rows={5} maxLength={500} className={`${inputClass} resize-none`} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <button
          type="submit"
          className="w-fit rounded-lg bg-[#C0522A] px-6 py-2.5 text-sm font-semibold text-[#f0ece4] transition hover:bg-[#d4623a]"
        >
          SEND MESSAGE
        </button>

        {response && <p className="text-sm text-[#C9A87C]">{response}</p>}
      </form>
    </div>
  )
}
