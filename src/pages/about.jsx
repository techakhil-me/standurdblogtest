import React from 'react';
import Layout from '../layout';
import me from '../../static/akhil.jpg';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={me} className="user-avatar" alt="Akhil Padmanabhan" />
        <section className="about-context">
          <div>
            <h3>Akhil Padmanabhan</h3>
            <p className="time">2003-03-07</p>
            <p>
            Tech Enthusiast, having designed many logos, banners and website ux/ui looking forward to enrich my creative hobby as an professional asset.
            My education also made me capable of coding programs in python, c++. I love competitive programming and writing automation scripts.
            Check out <a href="https://techakhilc47.github.io/">My Portfolio</a> to get in touch with me.
              
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
