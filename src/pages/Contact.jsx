import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    };

    return (
        <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-600 opacity-20 blur-[100px]"></div></div>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 ">
        
            <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
                Contact Us
            </h2>
            
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-md bg-white  p-8 rounded-xl shadow-xl space-y-5"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    rows="5"
                    required
                ></textarea>

                <button 
                    type="submit" 
                    className="flex hover:cursor-pointer items-center justify-center gap-2 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/yxwmgaav.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{ width: "30px", height: "30px" }}
                    />
                    Send Message
                </button>
            </form>
        </div>
</>
    );
}
