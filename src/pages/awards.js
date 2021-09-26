import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import "../styles/global.css";

const AwardsPage = ({ data }) => {
  const awards = data.allMarkdownRemark.nodes[0].frontmatter && data.allMarkdownRemark.nodes[0].frontmatter.awards;
  const name = data.allMarkdownRemark.nodes[0].frontmatter && data.allMarkdownRemark.nodes[0].frontmatter.person.name;

  return (
    <Layout name={name}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 178,
          color: "#FF00F0",
          height: "calc(100% - 178px)",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontStyle: "italic",
            fontFamily:
              "FuturaBT-Medium,FuturaBT-Medium,AdobeInvisFont,MyriadPro-Regular",
          }}
        >
          AWARDS_
        </div>
        <div
          style={{
            marginLeft: 469,
            fontFamily: "FuturaBT-Light,AdobeInvisFont,MyriadPro-Regular",
          }}
        >
          {awards && awards.map((award) => (
            <div
              key={`${award.award.branch}, ${award.award.earned}, ${award.award.year}`}
              style={{
                fontSize: 18,
                marginBottom: 14,
                color: "#FF00F0"
              }}
            >
              {`${award.award.branch}, ${award.award.earned}, ${award.award.year}`}
            </div>
          ))}
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
          contact_description
          awards {
            award {
              branch
              year
              earned
            }
          }
          person {
            name
          }
        }
      }
    }
}
`;

export default AwardsPage;
