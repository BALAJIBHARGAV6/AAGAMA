function toggleMenu() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('show');
    const navItems = document.querySelectorAll('nav a');

    navItems.forEach(item => {
        item.classList.toggle('show-navitems');
    });
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('close');
}


fetchContent('home');
function navigateTo(page) {
    fetchContent(page);
}

function fetchContent(page) {
    let content = [];
    switch (page) {
        case 'home':
            content.push(`
      <header class="home-page">
      <div class="half-circle">
          <div class="half-circle-content">
              <img src=""/>
              <h1 class="AAGAMA">AAGAMA-2K24 </h1>
              <span id="timer"></span>
              <button class="button-85" role="button" onclick="navigateTo('main)">Welcome To Mic College Of Technology</button>
          </div>
      </div>
     </header>
            `);
            break;
        case 'Catalogue':
            content.push(`
            
            <div class="catalogue">
            <img   src="" alt="Student Image">
            </div>
            `)
            break;
        case 'Main':
            content.push(`
            <div class="main">   
        
        <section>
          <div class="wrapper">
            <svg>
              <text x="50%" y="50%" text-anchor="middle">
                MAIN EVENTS
              </text>
            </svg>
          </div>
        </section>

    <div class="container">
        <div class="card">
            <div class="imgbx">
                <img src="paperp.jpg" alt="paperp">
            </div>
            <div class="content">
                <h3>Paper Presentation</h3>
                <h4>Event Descripition</h4>
                <p>The Paper Presentation aims to provide a platform to showcase your ideas in front of an esteemed panel of judges.</p>
                <h4>More Info</h4>
        
                <div class="modal-overlay">
                    <div class="modal">
                        <div class="modal-header">
                            <h2>AAGAMA-2K24</h2>
                            <button class="close-modal-btn">&times;</button>
                        </div>
                        <div class="modal-content">
                        <center><h1>Paper Presentation</h1></center>
                       </div>
                    </div>
                </div>
          </div>
          </div>
        <div class="card" data-tilt>
            <div class="imgbx">
                <img src="ElectricalCrossWord.avif" alt="ElectricalCrossWord">
            </div>
            <div class="content">
                <h3>Electrical Cross Word</h3>
                <h4>Event Desicripition</h4>
                <p>This event purpose was to boost up our mind and to make us think little bit more than we usually do.</p>
                <h4>More Info</h4>
                <div class="modal-overlay">
                    <div class="modal">
                        <div class="modal-header">
                            <h2>AAGAMA-2K24</h2>
                            <button class="close-modal-btn">&times;</button>
                        </div>
                        <div class="modal-content">
                        <center><h3>Electrical Cross Word</h3></center>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="imgbx">
                <img src="Circuit.jpg" alt="Cricuit">
            </div>
            <div class="content">
                <h3>Blind Circuit</h3>
                <h4>Event Desicripition</h4>
                <p>Blind circuit is fun-technical event in which the participants were divided into number of teams</p>
                <h4>More Info</h4>
                <div class="modal-overlay">
                    <div class="modal">
                        <div class="modal-header">
                            <h2>AAGAMA-2K24</h2>
                            <button class="close-modal-btn">&times;</button>
                        </div>
                        <div class="modal-content">
                        <center><h3>Blind Circuit</h3></center>
                        
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="imgbx">
            <img src="CodeCrunch.png" alt="codecrunch">
        </div>
        <div class="content">
            <h3>Code Crunch</h3>
            <h4>Event Desicripition</h4>
            <p>In This event we have one round. We will provide a situation or problem and some questions will be given on the problem </p>
            <h4>More Info</h4>

            <div class="modal-overlay">
                <div class="modal">
                    <div class="modal-header">
                        <h2>AAGAMA-2K24</h2>
                        <button class="close-modal-btn">&times;</button>
                    </div>
                    <div class="modal-content">
                        <center><h3>Code Crunch</h3></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<br>
    <section style="margin-top:-80px">
    <div class="wrapper" >
      <svg>
      <text x="50%" y="50%" text-anchor="middle">
        </text>
      </svg>
    </div>
  </section>
    <div class="container">
    <div class="card">
    <div class="imgbx">
        <img src="MindMarathon.jpg" alt="MindMarathon">
    </div>
    <div class="content">
        <h3>Mind Maze Marathon</h3>
        <h4>Event Descripition</h4>
        <p>The event contains 2 rounds.1st Round contains a MCQ exam for cse allied-branches,a technical exam & other branches have a exam.</p>
        <h4>More Info</h4>
        <div class="modal-overlay">
            <div class="modal">
                <div class="modal-header">
                    <h2>LAKSHYA-2K24</h2>
                    <button class="close-modal-btn">&times;</button>
                </div>
                <div class="modal-content">
                    <center><h3>Mind Maze Marathon</h3></center>
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="card">
        <div class="imgbx">
            <img src="Pixels.jpg" alt="Pixels.png">
        </div>
        
        <div class="content">
            <h3>Prompted Pixels</h3>
            <h4>Event desicripition</h4>
            <p>The Next Level" is a cutting-edge event that challenges college students to push the boundaries of creativity and technology in image recreation.</p>
            <h4>More Info</h4> 
            <div class="modal-overlay">
                <div class="modal">
                    <div class="modal-header">
                        <h2>AAGAMA-2K24</h2>
                        <button class="close-modal-btn">&times;</button>
                    </div>
                    <div class="modal-content">
                        <center><h3>Prompted Pixels</h3><center>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="imgbx">
            <img src="InnovationContest.png" alt="InnovationContest">
        </div>
        <div class="content">
            <h3>Innovation Contest</h3>
            <h4>Objective</h4>
            <p>The objective of the contest is to explore the ideas among the young generation participants may present novels.</p>
            <h4>More Info</h4>     

            <div class="modal-overlay">
                <div class="modal">
                    <div class="modal-header">
                        <h2>AAGAMA-2K24</h2>
                        <button class="close-modal-btn">&times;</button>
                    </div>
                    <div class="modal-content">
                        <center><h3>Innovation Contest</h3></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="card">
        <div class="imgbx">
        <img src="Techdebate.jpg" alt="Techdebate">
        </div>
        <div class="content">
            <h3>Tech Debate</h3>
            <h4>Objective</h4>
            <p>The objective of this event is to foster critical,thinking,effective,communication skills among participants.</p>
            <h4>More info</h4>   
            <div class="modal-overlay">
                <div class="modal">
                    <div class="modal-header">
                        <h2>AAGAMA-2K24</h2>
                        <button class="close-modal-btn">&times;</button>
                    </div>
                    <div class="modal-content">
                       <center><h3>Tech Debate</h3></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    <div class="container">
    <div class="card">
    <div class="imgbx">
        <img src="Find.jpeg" alt="Find">
    </div>
    <div class="content">
    <h3>Find-Fit-Finish</h3>
    <h4>Objective</h4>
    <p>To find words from the clues given and fit in the box to finish the task early.</p>
    <h4>More info</h4>   
    <div class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <h2>AAGAMA-2K24</h2>
                <button class="close-modal-btn">&times;</button>
            </div>
            <div class="modal-content">
            <center><h3>Find-Fit-Finish</h3></center>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<div class="container">
<div class="card">
<div class="imgbx">
    <img src="Bug.jpg" alt="bug">
</div>
<div class="content">
<h3>Bug Hunter</h3>
<h4>Objective</h4>
<p>The objective of the contest is to improve participants' problem-solving & debugging skills.understanding of programming concepts&fix error in code</p>
<h4>More info</h4>

<div class="modal-overlay">
    <div class="modal">
        <div class="modal-header">
            <h2>AAGAMA-2K24</h2>
            <button class="close-modal-btn">&times;</button>
        </div>
        <div class="modal-content">
           <center><h3>Bug Hunter</h3></center>
        </div>
    </div>
</div>
</div>
</div>
</div>
<div class="container">
<div class="card">
<div class="imgbx">
    <img src="CAD.jpg" alt="">
</div>
<div class="content">
<h3>CAD</h3>
<h4>Objective</h4>
<p>Computer-aided design(CAD)war is the use of computer to aid in creation,modification,analysis of a design.</p>
<h4>More info</h4> 

<div class="modal-overlay">
    <div class="modal">
        <div class="modal-header">
            <h2>AAGAMA-2K24</h2>
            <button class="close-modal-btn">&times;</button>
        </div>
        <div class="modal-content">
           <center><h3>CAD</h3></center>
        </div>
    </div>
</div>
</div>
</div>
</div>
      `);
        break;
    case 'Department Events':
         content.push(`
   <div class="Card1">
   <img   src="" alt="Student Image">
   </div>
       `);
            break;
        case 'dept':
            content.push(`
            <div class="dept-container">
    <section>
        <div class="wrapper">
            <svg>
                <text x="50%" y="50%" text-anchor="middle">
                    Department Events
                </text>
            </svg>
        </div>
    </section>
    <div class="container">
  <div class="box">
    <span></span>
    <div class="content">
      <h2>CIVIL-EVENTS</h2>
      <h5>Paper Presentation.</h5>
      <h5>Build And Bridge.</h5>
      <h5>Techie Talky</h5>
      <h5>Techno Twister</h5>
      <a href="#">Read More</a>
    </div>
  </div>
    <div class="container">
  <div class="box">
    <span></span>
    <div class="content">
      <h2>EEE-EVENTS</h2>
      <h5>Techie Talky</h5>
      <h5>Techno Twister</h5>
      <a href="#">Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
    <h2>MECH-EVENTS</h2>
    <h5>Mr.Designer.</h5>
    <h5>Chitti On Wheels.</h5>
    <h5>Techie Talky</h5>
      <a href="#">Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>ECE-EVENTS</h2>
      <h5>Techie Talky.</h5>
      <h5>Vikshit With Innovation.</h5>
      <h5>Circuit Circus.</h5>
      <h5>Zero Gravity.</h5>
      <a href="#">Read More</a>
    </div>
  </div> 
  <div class="box">
    <span></span>
    <div class="content">
      <h2>CSE-EVENTS</h2>
      <h5>Techie Talky.</h5>
      <h5>Code Zill.</h5>
      <h5>Find-Fit-Finish.</h5>
      <h5>Code Crunch.</h5>
      <a href="#">Read More</a>
    </div>
  </div>

    <div class="box">
    <span></span>
    <div class="content">
      <h2>IT-EVENTS</h2>
      <h5>Techie Talky.</h5>
      <h5>Code Swap.</h5>
      <h5>Web Wizards.</h5>
      <h5>Bus it Out!!</h5>
      <a href="#">Read More</a>
    </div>
  </div>
</div>
<div class="box">
    <span></span>
    <div class="content">
      <h2>AI-EVENTS</h2>
      <h5>Techie Talky.</h5>
      <h5>Mind Maze Marathon.</h5>
      <h5>Prompting Pixels.</h5>
      <a href="#">Read More</a>
    </div>
  </div>
</div>
   <div class="box">
    <span></span>
    <div class="content">
      <h2>BED-EVENTS</h2>
      <h5>Quiz</h5>
      <h5>Technician</h5>
      <a href="#">Read More</a>
    </div>
  </div>
</div>

  
    <div class="container">
        <div class="box">
            <div class="imgbx">
                <img src="" alt="">
            </div>
            <div class="content">
                <h3>EEE-EVENTS</h3>
                <h5>Paper Presentation.</h5>
                <h5>Build And Bridge.</h5>
                <h5>Techie Talky</h5>
                <h5>Techno Twister</h5>
                <h4>More Info</h4>
        
                <div class="modal-overlay">
                    <div class="modal">
                        <div class="modal-header">
                            <h2>AAGAMA-2K24</h2>
                            <button class="close-modal-btn">&times;</button>
                        </div>
                        <div class="modal-content">
                        <center><h3>EEE-EVENTS</h3></center>
                       </div>
                    </div>
                </div>
          </div>
        </div>
    </div>
    <div class="container">
          <div class="box">
              <div class="imgbx">
                  <img src="" alt="">
              </div>
              <div class="content">
                  <h3>MECH-EVENTS</h3>
                  <h5>Mr.Designa.</h5>
                  <h5>Chitti On Wheels.</h5>
                  <h5>Techie Talky</h5>
                  <h4>More Info</h4>
          
                /*<div class="modal-overlay">
                      <div class="modal">
                          <div class="modal-header">
                              <h2>AAGAMA-2K24</h2>
                              <button class="close-modal-btn">&times;</button>
                          </div>
                          <div class="modal-content">
                          <center><h3>MECH-EVENTS</h3></center>
                         </div>
                      </div>*/
                  </div>
            </div>
            </div>
    </div>
    <div class="container">
            <div class="box">
                <div class="imgbx">
                    <img src="" alt="">
                </div>
                <div class="content">
                    <h3>ECE-EVENTS</h3>
                    <h5>Techie Talky.</h5>
                    <h5>Vikshit With Innovation.</h5>
                    <h5>Circuit Circus.</h5>
                    <h5>Zero Gravity.</h5>
                    <h4>More Info</h4>
            
                    <div class="modal-overlay">
                        <div class="modal">
                            <div class="modal-header">
                                <h2>AAGAMA-2K24</h2>
                                <button class="close-modal-btn">&times;</button>
                            </div>
                            <div class="modal-content">
                            <center><h3>ECE-EVENTS</h3></center>
                           </div>
                        </div>
                    </div>
              </div>
            </div>
    </div>
    <div class="container">
              <div class="box">
                  <div class="imgbx">
                      <img src="" alt="">
                  </div>
                  <div class="content">
                      <h3>CSE-EVENTS</h3>
                      <h5>Techie Talky.</h5>
                      <h5>Code Zill.</h5>
                      <h5>Find-Fit-Finish.</h5>
                      <h5>Code Crunch.</h5>
                      <h4>More Info</h4>
              
                      <div class="modal-overlay">
                          <div class="modal">
                              <div class="modal-header">
                                  <h2>AAGAMA-2K24</h2>
                                  <button class="close-modal-btn">&times;</button>
                              </div>
                              <div class="modal-content">
                              <center><h3>CSE-EVENTS</h3></center>
                             </div>
                          </div>
                      </div>
                </div>
                </div>
              
    </div>
    <div class="container">
    <div class="box">
    <div class="imgbx">
    <img src="" alt="">
                      </div>
                      <div class="content">
                          <h3>AI-EVENTS</h3>
                          <h5>Techie Talky.</h5>
                          <h5>Mind Maze Marathon.</h5>
                          <h5>Prompting Pixels.</h5>
                          <h4>More Info</h4>
                  
                          <div class="modal-overlay">
                              <div class="modal">
                                  <div class="modal-header">
                                      <h2>AAGAMA-2K24</h2>
                                      <button class="close-modal-btn">&times;</button>
                                  </div>
                                  <div class="modal-content">
                                  <center><h3>AI-EVENTS</h3></center>
                                 </div>
                              </div>
                          </div>
                    </div>
                    </div>
    <div class="container">
                    <div class="box">
                    <div class="imgbx">
                        <img src="" alt="">
                    </div>
                    <div class="content">
                        <h3>IT-EVENTS</h3>
                        <h5>Techie Talky.</h5>
                        <h5>Code Swap.</h5>
                        <h5>Web Wizards.</h5>
                        <h5>Bus-It-Out.</h5>
                        <h4>More Info</h4>
                
                        <div class="modal-overlay">
                            <div class="modal">
                                <div class="modal-header">
                                    <h2>AAGAMA-2K24</h2>
                                    <button class="close-modal-btn">&times;</button>
                                </div>
                                <div class="modal-content">
                                <center><h3>IT-EVENTS</h3></center>
                               </div>
                            </div>
                        </div>
                  </div>
                  </div>
    <div class="container">
                  <div class="box">
                  <div class="imgbx">
                      <img src="" alt="">
                  </div>
                  <div class="content">
                      <h3>BED-EVENTS</h3>
                      <h5>Quiz.</h5>
                      <h5>Techian.</h5>
                      <h4>More Info</h4>
              
                      <div class="modal-overlay">
                          <div class="modal">
                              <div class="modal-header">
                                  <h2>AAGAMA-2K24</h2>
                                  <button class="close-modal-btn">&times;</button>
                              </div>
                              <div class="modal-content">
                              <center><h3>ECE-EVENTS</h3></center>
                             </div>
                          </div>
                      </div>
                </div>
                </div>
    </div>
          
  
            
    
              
      
              
          
          
  

            `)
            break;
        default:
            content = ["<h2>Page Not Found</h2><p>The requested page could not be found.</p>"];
            break;
    }
    

    // Update the main content
    document.querySelector('main').innerHTML = content.join('');
}
