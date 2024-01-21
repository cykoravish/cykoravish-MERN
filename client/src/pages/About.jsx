import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>
                Welcome,
                {user ? ` ${user.username} to our website` : ` to our website`}
              </p>
              <h1>Unleashing Innovation with JavaScript Mastery</h1>
              <p>
                JavaScript Pioneers: Unleashing creativity, we lead with
                JavaScript mastery. Transforming concepts into dynamic web
                experiences, our team pioneers innovation in both client and
                server development.
              </p>
              <p>
                Dual-Side Dynamo: JavaScript powers our projects on both client
                and server fronts. Its versatility, seen in asynchronous
                operations and real-time updates, defines the dynamic
                experiences we craft.
              </p>
              <p>
                Agile & Adaptable: With JavaScript's intuitive syntax and broad
                developer appeal, our agile approach ensures projects are not
                just current but adaptable to the ever-evolving landscape of web
                development.
              </p>
              <p>
                Ecosystem Enriched: In the vast JavaScript ecosystem, we
                navigate frameworks like React, Angular, and Vue.js. This rich
                environment propels the development of scalable, feature-rich
                applications for diverse needs.
              </p>
              <p>
                Future-Forward Development: Positioned at the forefront, we
                embrace JavaScript's dynamic nature. Our commitment to
                innovation ensures projects remain future-proof, continuously
                evolving with the latest in web development trends.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
