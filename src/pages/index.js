import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import "../styles/global.css";
import { graphql } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily:
    "FuturaBT-Light,FuturaBT-Medium,FuturaBT-Light,AdobeInvisFont,MyriadPro-Regular",
};

// markup
const IndexPage = ({ data }) => {
  const contact_description =
    data.allMarkdownRemark.nodes[0].frontmatter &&
    data.allMarkdownRemark.nodes[0].frontmatter.contact_description;
  const person = data.allMarkdownRemark.nodes[0].frontmatter && {
    name: data.allMarkdownRemark.nodes[0].frontmatter.person.name,
    telephone: data.allMarkdownRemark.nodes[0].frontmatter.person.telephone,
    mail: data.allMarkdownRemark.nodes[0].frontmatter.person.mail,
  };

  const img_desc = data.allMarkdownRemark.nodes[0].frontmatter && {
    name: data.allMarkdownRemark.nodes[0].frontmatter.index_page.image_desc.name,
    detail: data.allMarkdownRemark.nodes[0].frontmatter.index_page.image_desc.detail
  };

  return (
    <div style={pageStyles}>
      <Layout name={person.name}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 67,
          }}
        >
          <div>
            <StaticImage
              src="../images/index-image.jpg"
              alt="place image"
              layout="fixed"
              width={1353}
              height={761}
            />
            <div
              style={{
                marginTop: 7,
                fontSize: 14,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{img_desc.name}</div>&nbsp;
              <div style={{ fontStyle: "italic" }}>{img_desc.detail}</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 24,
            fontSize: 16,
          }}
        >
          <span>{contact_description}</span>
          <span>m: {person.mail}</span>
          <span>t: {person.telephone}</span>
        </div>
      </Layout>
    </div>
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

export default IndexPage;
