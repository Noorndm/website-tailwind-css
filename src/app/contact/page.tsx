import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="text-center mt-10 px-2 text-4xl font-bold text-[#434343] ">Get In Touch with Our Agents</h1>
      <div className="max-w-2xl my-20 mx-2 sm:mx-auto p-7 bg-white shadow-lg shadow-black rounded-2xl">
        <form>
          <label className="text-[#4e4e4e] text-xl font-semibold">Full Name</label><br />
          <input type="text" className="w-full py-3 my-4 rounded-2xl border border-[#c5c5c5]" placeholder="  Your Name.." required/><br />
          <label className="text-[#4e4e4e] text-xl font-semibold">Email Address</label><br />
          <input type="email" className="w-full py-3 my-4 rounded-2xl border border-[#c5c5c5]" placeholder="  Your E-mail.." required/><br />
          <label className="text-[#4e4e4e] text-xl font-semibold">Contact Number</label><br />
          <input type="number" className="w-full py-3 my-4 rounded-2xl border border-[#c5c5c5]" placeholder="  Your Phone Number.." required/><br />
          <label className="text-[#4e4e4e] text-xl font-semibold">Message</label><br />
          <textarea rows={5} className="w-full py-3 my-4 rounded-2xl border border-[#c5c5c5]" placeholder="  Your Message" required></textarea><br />
          <button type='submit' className="text-[16px] bg-black text-white rounded-full py-2 px-2 mt-7">Send Message</button><br />
        </form>
      </div>
    </div>
  )
}

export default Contact
