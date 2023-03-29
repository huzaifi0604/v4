import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I am a highly motivated and detail-oriented student currently pursuing a bachelor's
              degree in Cybersecurity and Digital Forensics from FAST - NUCES. Throughout my
              academic career, I have gained extensive knowledge in programming languages such as
              Python, C++, and Java. In addition, I have also developed skills in Malware Analysis
              and SOC Analysis, which have equipped me to effectively identify and remediate
              security threats.
            </p>
            <p>
              In my spare time, I enjoy participating in online cybersecurity competitions and
              staying up-to-date with the latest cybersecurity trends and techniques. I am always
              eager to learn and take on new challenges, and I am confident that my strong work
              ethic and passion for cybersecurity will make me a valuable asset to any team. If you
              are interested in connecting or learning more about my experience, please don't
              hesitate to reach out.
            </p>
            <p>
              During this tenure I got the privilege to hone my skills at{' '}
              <br>
                <a href="https://www.linkedin.com/posts/huzaifi0604_internship-completion-certificate-activity-6983426377731457024-0uyK?utm_source=share&utm_medium=member_desktop">
                  Cyber Defense &amp;Network Security intern at Thincscorp
                </a>
              </br>
              ,{' '}
              <br>
                <a href="https://www.linkedin.com/posts/huzaifi0604_csl-blueteam-cybersecurity-activity-6979030619301273601-IFTx?utm_source=share&utm_medium=member_desktop">
                  Blue Team Trainer @ CSL, NUCES
                </a>
              </br>
              , <br>DataBase Systems &amp; Data Structures' Lab Demonstrator at FAST - NUCES</br>.
            </p>
            <p>
              I also recently{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                published a Blog
              </a>{' '}
              on exploiting window's SMB module using Eternal Blue through Metasploit.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
