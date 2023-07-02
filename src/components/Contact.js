const Contact = () => {
  return (
    <div className="text-center">
      <section id="contact" className="">
        <div className="text-3xl my-9 p-2">
          <h2>Contact Us</h2>
          {/* <p>oh god again</p> */}
        </div>
        <div className="w-full flex justify-center mt-14">
          <div className="w-1/5 flex flex-col p-8">
            <div className="box">
              <div className="icon">
                <i className="glyphicon glyphicon-map-marker"></i>
              </div>
              <div className="text">
                <h3 className="text-lg font-bold text-purple-900">Address</h3>
                <p>New delhi , 172881,rohini west</p>
              </div>
            </div>
            <div className="box">
              <div className="text">
                <h3>Phone: XXXXXXXXX</h3>
              </div>
            </div>
            <div className="box">
              <div className="text">
                <h3>Email: food@gmail.com</h3>
              </div>
            </div>
          </div>
          <div className="p-8 ">
            <form className="border-slate-950">
              <h2 className="text-lg font-bold text-purple-900">
                Send Message
              </h2>
              <div className="mt-3">
                <input
                  type="text"
                  name=""
                  required="required"
                  placeholder="Full Name"
                />
                <span>Full Name</span>
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  name=""
                  required="required"
                  placeholder="Email"
                />
                <span>Email</span>
              </div>
              <div className="mt-3">
                <textarea
                  required="required"
                  placeholder="Type your Message..."
                ></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="mx-28 w-20 h-8 border border-slate-400 rounded text-green-800">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
