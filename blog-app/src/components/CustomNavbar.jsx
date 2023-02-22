import { useEffect, useState } from "react";
import { Form, NavLink as ReactLink, useNavigate} from "react-router-dom";
import { Collapse,Nav, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import { doLogout,getCurrentuserDetail,isLoggedIn} from "../auth";
 


const CustomNavbar = () => {

    let navigate = useNavigate()
   const [isOpen,setIsOpen] = useState(false)

   const[login,setLogin] = useState(false)
    const [user,setUser] = useState(undefined)
    console.log("login--->", login);

    useEffect(()=>{

     setLogin(()=>{console.log("ssssssss-->",isLoggedIn())}) 
     setUser(getCurrentuserDetail())  

    },[login])


    const logout=()=>{

        doLogout(()=>{

            //  logged out 

            setLogin(false)
            navigate("/")
        })
    }

    return(

        <div>

            <Navbar color="dark" dark expand = "md" fixed="" className="px-5">
                <NavbarBrand tag = {ReactLink} to="/">
                  MyBlogs
                </NavbarBrand>
                <NavbarToggler onClick={()=>setIsOpen(!isOpen)}/>
                <Collapse isOpen = {isOpen}navbar>
                    <Nav className="me-auto" 
                    navbar>

                           <NavItem>
                            <NavLink  tag = {ReactLink} to="/">
                                New Feed
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink  tag = {ReactLink} to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  tag = {ReactLink} to="/services">
                                Services
                            </NavLink>
                        </NavItem>
                        
                        <UncontrolledDropdown inNavbar nav >
                            <DropdownToggle caret nav >
                                More
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag = {ReactLink} to="/services">
                                    Contact Us
                                </DropdownItem>
                                <DropdownItem>
                                    Facebook
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Youtube
                                </DropdownItem>
                                <DropdownItem>
                                    Instagram
                                </DropdownItem>
                                <DropdownItem>
                                    LinkedIN
                                </DropdownItem>
                             </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>


                    <Nav navbar>
                       
                       {
                          login ?

                            <>
                            
                            <NavItem>
                            <NavLink tag ={ReactLink} to="/user/profile-info">
                                Profile Info
                            </NavLink>
                            </NavItem>



                            <NavItem>
                            <NavLink tag ={ReactLink} to="/user/dashboard">
                                {user.email}
                            </NavLink>
                          </NavItem>

                            <NavItem>
                            <NavLink onClick={logout}>
                                Logout
                            </NavLink>
                          </NavItem>
                            </>
                          :
                          <>
                            
                            <NavItem>
                            <NavLink tag = {ReactLink} to="/login">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag = {ReactLink} to="/signup">
                                Signup
                            </NavLink>
                        </NavItem>
                            
                            
                        </>
                       }
                        
                     
                    
                     </Nav>
               </Collapse>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;