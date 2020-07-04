import React,{ useState,useRef,useEffect } from 'react';
import {Link} from 'react-router-dom';



const NavBar = ({navLinks})=>{
  const [hoverIndex,setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);
  const ulNode = useRef(null);

  const handleOutsideClick=(event)=>{
    if(ulNode && ulNode.current.contains(event.target)){
      setNavOpen(!navOpen)
    }else{
      setNavOpen(false)
    }
  }

useEffect(()=>{
  document.addEventListener('click',handleOutsideClick)

  return()=>{
    document.removeEventListener('click',handleOutsideClick)
  }
})



  return(
    <nav className="nav-conainer"
    style={{background: '#026cdf'}}
    >
    <div className="logo-container">
    <div className={'logo'}> Ticket Master API</div>
      <div
      className='close-button'
      ref={ulNode}
      ><i className="fas fa-bars"></i></div>
    </div>
      <ul
        className={navOpen? 'ul-container': 'ul-container-close'}
        style={{background:'#026cdf'}}>
        {navLinks.map((link,index)=>{
          return<li key={link.key}
                  onMouseEnter={ ()=> setHoverIndex(index)}
                  onMouseLeave={ ()=> setHoverIndex(-1)}>
                  <Link to={link.path}
                    style={{background: hoverIndex === index ? ('hoverBackground' || '#999'): ''}}>
                    {link.text}
                    <i className={link.icon}></i>
                    </Link>
                </li>
        })}
      </ul>
    </nav>
  )
}


export default NavBar
