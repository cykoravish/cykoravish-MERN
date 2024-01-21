import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>I am a Hungry Learner</p>
              <h1>Welcome to cyko's world</h1>
              <p>
                MERN stack: MongoDB for data, Express.js for server, React for
                UI, and Node.js for backend. It's a powerful, unified JavaScript
                stack for building modern web apps.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>I'm here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              "Welcome to cyko's world. It's a dynamic MERN app for seamless
              user experiences. Integrated with MongoDB, Express.js, React, and
              Node.js, it offers robust functionality and an intuitive
              interface. Your gateway to a modern and enjoyable online
              experience."
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
