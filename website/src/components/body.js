import React from 'react';
import './style.css';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            title: " ", text: " ",

            words: [
                "Wherever you go and use the internet through a browser such as Google or Firefox, you go to a website. Most websites are more than the pictures and text you see. A website is like an iceberg, you only see a portion of it, but there is more that you can’t see. Websites are made up of two sections: the front end, and the back end. Not all websites use the two parts, but all websites use the front end. Front end is what you see, the pictures, text, and interaction; the back end is the behind the scenes, the logic to let the users interactions give a result. A full-stack developer is a type of computer scientist who can do each of these parts effectively, which makes them very valuable.",
                "This job is for me and those who are creative and want to help shape the future of technology. In this job, you will be looking to use your creativity to solve problems and create beautiful interfaces. If you are someone who wants to create something that helps people, this is also for you. You could create a website that could help regulate traffic and give them an optimal route. This job gives you many options to do many things in many other fields, which gives you a taste of other life and the importance of their job.",
                "Full-stack web developers have varying salaries based on who they work for and what they are working on. They often make more than front end and back end developers. The Canadain median salary for Full stack developers is around $110,000 per year, but a company such as Google pays their employees more, they earn an average of $166,564 American.",
                "Full-stack developers are programmers for websites that have multiple types of work conditions. Full-stack has the option to work from home or an office. When you work at an office, people believe that you work 16-hour workdays. That’s not true, full-stack developers do have a lot of work but often work in teams which helps with the workload.",
                "The world has begun to shift toward the technology era in which the internet is very important. With the growth of the internet and web browsers, more jobs in this industry will be needed. According to the U.S. Bureau of labor statistics, web developer outlook from 2018-2028 is a 13% increase, which is much faster than average.",
                "HTML stands for hypertext markup language and is the skeleton of every website. Html5 is the newest most used version that makes up the majority of the content found on the website.",
                "CSS stands for Cascading Style Sheets and is used for the style. Down below is a photo of this website before most of the CSS was added.  CSS controls the font, color, images, the way the page is laid out, and more. CSS3 is the modern version used on the web; it adds features such as animations. ",
                "Javascript isn’t necessary to make a website, but it lets you create awesome features. It adds more interactions, animations, and features that let your website become a fully-featured Web application. Javascript has advanced so much that you can use frameworks and libraries such as React and Node.js to create better websites. Working in the front end with HTML, CSS, and JS takes a lot of creativity but is very rewarding and fun.",
                "Back end development is the behind the scenes work, meaning that the user does not directly see the product of their work. When working on the back end, you are creating logical applications such as your suggested videos on youtube. Back end development can use almost any high-level programming languages such as javascript, C++, and Ruby. ",
                "Application logic is the logic of the computer program. It governs what a computer program is trying to accomplish. Such as a calculator that does math.",
                "Databases are where you store the information of users. For example, you store the username and password of users for their login.",
                "Data and application integration uses your data to integrate it into your user experience. For example, the youtube algorithm gives you recommendations so you can watch a video you might like.",
                "The most important part of the backend is testing and debugging. A program wants to have no errors so that it can work effectively. "
            ]
        }
    }

    backendClick = () => {
        if (this.state.title == "Back-End") {
            this.setState({
                title: "",
                text: "",
                frontendColour: 'white',
                backendColour: 'white'
            })
        }

        else {
            this.setState({
                title: "Back-End",
                text: <div>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   The front end is what the user sees and directly interacts with. It is made with
                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-HTML
                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- CSS
                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Javascript
                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.words[5]}
                        <br></br><br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.words[6]}
                        <br></br><br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.words[7]}
                    </p>
                </div>,

                frontendColour: 'white',
                backendColour: 'black'
            });
        }
    }

    frontendClick = () => {
        if (this.state.title == "Front-End") {
            this.setState({
                title: "",
                text: "",
                frontendColour: 'white',
                backendColour: 'white'
            })
        }

        else {
            this.setState({
                title: "Front-End",
                text:
                    <div>
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.words[8]}

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The key role of the back end developer is to make sure that the data requested by the front end and then create the back end. The back end consists of:

                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-application logic

                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-databases

                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- data and application integration
                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.words[9]}
                            <br></br><br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {this.state.words[10]}
                            <br></br><br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.words[11]}
                        </p>
                    </div>,
                frontendColour: 'black',
                backendColour: 'white'
            })
        }
    }

    render() {
        return (
            <div>
                <div class="body">
                    <div>
                        <h2>What is a Full-Stack developer?</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.words[0]}</p>
                    </div>
                    <div>
                        <h2>Salary</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.words[2]}</p>

                        <h2>Conditions</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.words[3]}</p>

                        <h2>Outlook</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.words[4]}</p>
                    </div>
                </div>
                <div>
                    <nav class="toggles">
                        <h2><button style={{ color: this.state.frontendColour }} onClick={this.frontendClick}>Front-End</button></h2>
                        <h2><button style={{ color: this.state.backendColour }} onClick={this.backendClick}>Back-End</button></h2>
                    </nav>

                    <div class="body">
                        <h3>{this.state.title}</h3>
                        <p>{this.state.text}</p>
                    </div>

                </div>

            </div>
        );
    }
};

class Schools extends React.Component {
    constructor() {
        super()
        this.state = {

            title: " ",

            text: " ",

            words: [
                "There are many education paths to go down: University, self-taught, College, and Bootcamp. Each education path has its benefits. The University and College path will teach you less on being a full stack developer but more focused on how to be a programmer. Bootcamps and self-taught lets you solely focus on becoming a Full-stack developer. If you are still in high school, I would suggest trying their computer science class to see if this career path would be of interest to you.",
                "If you decide to go through University to get into web development, you should try to get a bachelor’s degree in computer science. A bachelor in computer science will give you more experience with programming logic, but less with web development; some universities offer web development courses. At University, you can personalize your courses to the field you wish to enter. As well as learn new skills such as machine learning, which can let you create a prediction application. To get into these universities you need 6 grade 12 U/M classes, including advanced functions, calculus and vectors, any 4U English class, and one more university class. University is a great path if you plan to look at a board view of computer science. ",
                "If you decide to go through College to get into web development, you will go through the General Web Design and Development Program. This degree will give you the basic experience to become a web developer. You will not have as much theory on advanced logic of programming but you will gain more valuable skills to web development such as supporting and managing your website. The minimum requirement for entry is to finish high school with one grade 12 English class and one grade 12 math class; a grade 12 technology class would also be helpful. ",
                "If you decide to go learn through a bootcamp, you will be learning only about a certain subject(this case is web development). Boot Camps cost less with the web development course from lighthouse lab costing $11, 500. Here you will learn everything that you need to know to become an entry level full stack developer. It will give you an opportunity to learn from others who have specialized in the field as well as meet others going down the same career path as you. Lighthouse labs bootcamp has a great program for a reasonable cost.",
                "	Waterloo is one of Canada’s top universities for technology and offers a wide variety of courses and experiences. To get into Waterloo the admission average is low 90s from your 6 grade 12 U/M classes, including advanced functions, calculus, and vectors, any 4U English class, one more university class, and it is suggested that you take grade 11 computer science. This program takes 4 years, but if you join the co-op program, it takes 5 years. I would suggest doing co-op because Waterloo has great locations for co-op such as Microsoft, this gives you the most important education, practice. During your first year at Waterloo, you will take Designing Functional Programs, Algorithm Design, and Data Abstraction,  Algebra,  Calculus 1, Linear Algebra 1, Calculus 2, a Communication course and three electives. These electives can be anything you want, but I suggest at least one of them, either introduction to Computing through Applications(learning the internet) or Introduction to Computer Programming 1 (learn the fundamentals of programming). Waterloo will give you the information necessary to enter the web development field, but if you join the co-op, they will give you the experience you need to succeed in the field. If you would like more information you can check out Waterloo in the link below: "
            ]
        }
    }
    universityClick = () => {
        if (this.state.title == "University") {
            // console.log("true")
            this.setState({
                title: "", text: "",
                universityColour: 'white    ',
                CollegeColour: 'white',
                BootCampColour: 'white'
            })
        }
        else {
            this.setState({
                title: "University",
                text: <p>{this.state.words[1]}</p>,
                universityColour: 'black',
                CollegeColour: 'white',
                BootCampColour: 'white'
            })
        }

    }

    bootCampClick = () => {
        if (this.state.title == "BootCamp") {
            this.setState({
                title: "", text: "",
                universityColour: 'white',
                CollegeColour: 'white',
                BootCampColour: 'white'
            })
        }

        else {
            this.setState({
                title: "BootCamp",
                text: <p>
                    {this.state.words[2]}
             You can check them out with the link below:
             <br></br>
                    <a href="https://www.lighthouselabs.ca/web-bootcamp">lighthouseLabsBootcampLink</a>.
         </p>,
                universityColour: 'white',
                CollegeColour: 'white',
                BootCampColour: 'black'
            })
        }
    }

    collegeClick = () => {
        if (this.state.title == "College") {
            this.setState({
                title: "", text: "",
                universityColour: 'white',
                CollegeColour: 'white',
                BootCampColour: 'white'
            })
        }
        else {
            this.setState({
                title: "College",
                text: <p>{this.state.words[3]}</p>,
                universityColour: 'white',
                CollegeColour: 'black',
                BootCampColour: 'white'
            })
        }

    }

    render() {
        return (
            <div>
                <div class="body">
                    <h2>Education</h2>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.words[0]}
                    </p>
                </div>

                <div>
                    <nav class="togglesT">
                            <h2><button style={{ color: this.state.CollegeColour }} onClick={this.collegeClick}>College</button></h2>
                            <h2><button style={{ color: this.state.BootCampColour }} onClick={this.bootCampClick}>BootCamp</button></h2>
                            <h2><button style={{ color: this.state.universityColour }} onClick={this.universityClick}>University</button></h2>
                    </nav>
                    <div class="body">
                        <h3>{this.state.title}</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.text}</p>
                    </div>

                </div>

                <div>
                    <div class="body">
                        <h2 >Waterloo</h2>
                        <p>{this.state.words[4]}<br></br><a target="blank" href="https://uwaterloo.ca/future-students/programs/computer-science">Waterloo's Computer Science Program</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

class MyPerspective extends React.Component {
    render() {
        return (
            <div>
                <h3></h3>
                <p></p>
            </div>
        )
    }
}
function Body() {
    return (
        <div>
            <h1></h1>
            <About></About>
            <Schools></Schools>
            {/* <MyPerspective></MyPerspective> */}
        </div>
    );
};

export default Body;