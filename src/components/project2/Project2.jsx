import React from 'react';
import './Project2.css';
import { Zoom } from 'react-awesome-reveal';
import { FaGithub } from 'react-icons/fa';

const Project2 = () => {
    return (
        <div className='project'>
            <Zoom className='project-title'>
                <h1 className='pro-title'>Recent <span className="green">Projects</span></h1>
                <p>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>
            </Zoom>
            <div className='project-container'>
                <div className='box box1'></div>
                <div className='box box2'></div>
                <div className='box box3'></div>
            </div>
            <div className='demo-container'>
                <div className='box'>
                    <span><a href="https://github.com/nikkonbd/auto-car-hunter-client" target='blank'><button style={{ padding: '8px', fontWeight: '400', backgroundColor: '#01be96', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer', marginRight: '6px' }} className='btn'><FaGithub></FaGithub> Client</button></a></span>
                    <span><a href="https://github.com/nikkonbd/toys-car-pro-server" target='blank'><button style={{ padding: '8px', fontWeight: '400', backgroundColor: '#01be96', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer', marginRight: '6px' }} className='btn'><FaGithub></FaGithub> Server</button></a></span>
                    <span><a href="https://relaxed-alfajores-3e1775.netlify.app/" target='blank'><button style={{ padding: '8px', fontWeight: '400', backgroundColor: '#01be96', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' }} className='btn'>Demo</button></a></span>
                </div>
                <div className='box'>
                    <span><a href="https://github.com/nikkonbd/chef-recipe-hunter-client" target='blank'><button style={{ padding: '8px', fontWeight: '400', backgroundColor: '#01be96', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer', marginRight: '6px' }} className='btn'><FaGithub></FaGithub> Client</button></a></span>
                    <span><a href="https://github.com/nikkonbd/chef-recipe-hunter-server" target='blank'><button style={{ padding: '8px', fontWeight: '400', backgroundColor: '#01be96', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer', marginRight: '6px' }} className='btn'><FaGithub></FaGithub> Server</button></a></span>
                    <span><a href="https://chef-recipe-hunter-40a03.web.app/" target='blank'><button style={{ padding: '8px', fontWeight: '400', backgroundColor: '#01be96', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' }} className='btn'>Demo</button></a></span>
                </div>
                <div className='box'>
                    <span><a href="https://github.com/nikkonbd/summer-camp-client" target='blank'><button style={{ padding: '8px', fontWeight: '400', backgroundColor: '#01be96', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer', marginRight: '6px' }} className='btn'><FaGithub></FaGithub> Client</button></a></span>
                    <span><a href="https://github.com/nikkonbd/summer-camp-server" target='blank'><button style={{ padding: '8px', fontWeight: '400', backgroundColor: '#01be96', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer', marginRight: '6px' }} className='btn'><FaGithub></FaGithub> Server</button></a></span>
                    <span><a href="https://summer-camp-school-f34fc.web.app/" target='blank'><button style={{ padding: '8px', fontWeight: '400', backgroundColor: '#01be96', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' }} className='btn'>Demo</button></a></span>
                </div>
            </div>
        </div>
    );
};

export default Project2;