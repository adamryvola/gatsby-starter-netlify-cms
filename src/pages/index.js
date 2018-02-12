import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    console.log('DATA', data);

    return (
        <div>
            <h1>Mgr. Aneta Ryvolová, advokátka</h1>
            <p>Česká advokátní komora vede pod evidenčním číslem 17379</p>
            <p>sídlo: Mikulovská 4058/5, 628 00 Brno</p>
            <p>pobočka: Fišerova 1619, 676 02 Moravské Budějovice</p>
            <p>
                V oblasti daňového poradenství a účetního poradenství je
                spolupracováno s obchodní společností <a href="http://www.adane.cz" target="_blank"
                                                         className="inline-link">ADANE,
                s.r.o.</a>, v oblasti právní pomoci
                s <a href="http://www.aklorenzova.cz" target="_blank" className="inline-link">JUDr. Ivanou
                Lorenzovou,
                advokátkou</a> se sídlem v Brně.
            </p>
            <img className="social-ico" src="images/fb-ico.png"/>
            <img className="social-ico" src="images/lin-ico.png"/>
        </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
