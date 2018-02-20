import React, {Component} from 'react';
import graphql from 'graphql';
import Content, {HTMLContent} from '../components/Content';

const EXPAND_ALL = '+ rozbalit vše';
const COLLAPSE_ALL = '- sbalit vše';

export class ServicesPageTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            someExpanded: false,
        };
        this.expandToggle = this.expandToggle.bind(this);
        this.expandPanel = this.expandPanel.bind(this);
    }

    expandToggle() {
        const panels = document.getElementsByClassName("acc_panel");
        if (this.state.someExpanded) {
            for (let i = 0; i < panels.length; i++) {
                panels[i].children[0].classList.remove("active");
                const panel = panels[i].children[0].nextElementSibling;
                panel.style.maxHeight = null;
                panel.style.padding = 0;
            }
            this.setState({
                someExpanded: false,
            });
        } else {
            for (let i = 0; i < panels.length; i++) {
                panels[i].children[0].classList.add("active");
                const panel = panels[i].children[0].nextElementSibling;
                panel.style.padding = "15px";
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            this.setState({
                someExpanded: true,
            });
        }
    }

    expandPanel(index) {
        const panels = document.getElementsByClassName("acc_panel");
        panels[index].children[0].classList.toggle("active");
        this.setState({
            someExpanded: false,
        });
        const panel = panels[index].children[0].nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = 0;
        } else {
            panel.style.padding = "15px";
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.setState({
                someExpanded: true,
            });
        }
    }

    render() {
        const {services, text, intro} = this.props;
        const {someExpanded} = this.state;
        return (
            <div>
                <HTMLContent content={intro} />
                <button id="expand-controll"
                        onClick={e => this.expandToggle()}>{someExpanded ? COLLAPSE_ALL : EXPAND_ALL}</button>
                <Content className="content" content={
                    <div>
                        {services.map((service, i) => (
                            <div key={i} className="acc_panel">
                                <button onClick={e => this.expandPanel(i)} className="acc_panel_title">
                                    {service.title}
                                </button>
                                <div className="acc_panel_content">
                                    {service.content}
                                </div>
                            </div>
                        ))}
                        <HTMLContent content={text} />
                    </div>
                }/>
            </div>
        )
    }
}

export default ({data}) => {
    console.log('DATA', data);
    const {frontmatter, html} = data.markdownRemark;
    return (<ServicesPageTemplate services={frontmatter.services} intro={frontmatter.intro} text={html}/>);
};

export const servicesPageQuery = graphql`
  query ServicesPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        intro
        services {
            title
            content
        }
      }
      html
    }
  }
`;
