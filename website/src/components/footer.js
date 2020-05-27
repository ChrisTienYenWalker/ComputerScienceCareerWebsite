import React from 'react';
import './style.css';

export default class Footer extends React.Component {
    state = {
        image: [

            "https://a.slack-edge.com/80588/img/plugins/github/service_512.png",
            //github

            "https://images.idgesg.net/images/article/2018/04/google-gmail-logo-100755954-large.jpg"
            //gmail
        ],
        link: [

            //github
            "https://github.com/Master4020",

            //gmail
            "mailto:christienyenwalker@gmail.com"
        ]
    }
    render() {
        return (
            <footer class="footer">
                <div>
                    <nav>
                        <ul>
                            <a href={this.state.link[0]}><img src={this.state.image[0]} alt="img"></img></a>
                            <a href={this.state.link[1]}><img src={this.state.image[1]} alt="img"></img></a>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}

