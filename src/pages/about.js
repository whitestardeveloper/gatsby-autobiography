import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import "../styles/global.css";

const AboutPage = ({ data }) => {
  const education = data.allMarkdownRemark.nodes[0].frontmatter && data.allMarkdownRemark.nodes[0].frontmatter.about.education;
  const biography = data.allMarkdownRemark.nodes[0].frontmatter && data.allMarkdownRemark.nodes[0].frontmatter.about.biography;
  const person = data.allMarkdownRemark.nodes[0].frontmatter && {
    name: data.allMarkdownRemark.nodes[0].frontmatter.person.name,
    job: data.allMarkdownRemark.nodes[0].frontmatter.person.job,
  };

  return (
    <Layout name={person.name}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 177,
          height: "calc(100% - 177px)",
        }}
      >
        <div>
          <StaticImage
            alt="people portre"
            src="../images/people-portre.jpg"
            layout="fixed"
            width={302}
            height={302}
          />
          <div style={{ marginTop: 52 }}>
            <div style={{ marginBottom: 42 }}>
              {person.name}{" "}
              <span style={{ fontStyle: "italic" }}>{person.job}</span>
            </div>
            {education.map((e) => (
              <div
                style={{ fontSize: 14, marginTop: 14, fontStyle: "italic" }}
              >{`${e.graduate.university}, ${e.graduate.section}, ${e.graduate.year}`}</div>
            ))}
          </div>
        </div>
        <div
          style={{
            marginLeft: 309,
            width: 602,
            height: 622,
            fontSize: 18,
            textAlign: "justify",
            columnCount: 2,
            columnGap: 36,
            columnFill: "auto",
            color: "#FF00F0",
          }}
        >
          {biography}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          about {
            biography
            education {
              graduate {
                university
                section
                year
              }
            }
          }
          person {
            job
            name
          }
        }
      }
    }
}
`;

export default AboutPage;
