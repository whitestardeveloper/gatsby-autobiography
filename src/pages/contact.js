import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import "../styles/global.css";

const ContactPage = ({ data }) => {

  const contact_description =
    data.allMarkdownRemark.nodes[0].frontmatter &&
    data.allMarkdownRemark.nodes[0].frontmatter.contact_description;
  const person = data.allMarkdownRemark.nodes[0].frontmatter && {
    name: data.allMarkdownRemark.nodes[0].frontmatter.person.name,
    telephone: data.allMarkdownRemark.nodes[0].frontmatter.person.telephone,
    mail: data.allMarkdownRemark.nodes[0].frontmatter.person.mail,
    web_adress: data.allMarkdownRemark.nodes[0].frontmatter.person.web_adress,
    company_spell: data.allMarkdownRemark.nodes[0].frontmatter.person.company_spell,
  };


  return (
    <Layout name={person.name}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "calc(100% - 98px)",
          color: "#FF00F0",
        }}
      >
        <div>{person.company_spell}</div>
        <span style={{ marginTop: 24 }}>m: {person.mail}</span>
        <span style={{ marginTop: 16 }}>w: {person.web_adress}</span>
        <span style={{ marginTop: 16 }}>t: {person.telephone}</span>
      </div>
      <div style={{ width: "100%", textAlign: "center", marginBottom: 80 }}>
        {contact_description}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          contact_description
          index_page {
            image_desc {
              detail
              name
            }
          }
          person {
            job
            mail
            name
            telephone
            web_adress
            company_spell
          }
        }
      }
    }
  }
`;

export default ContactPage;
