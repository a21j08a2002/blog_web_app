import { useEffect, useRef, useState } from "react"
import {Button, Card, CardBody, Container, Form, Input, Label} from "reactstrap"
import { loadAllCategories } from "../Services/category-service"
import JoditEditor from"jodit-react";
 const AddPost=()=>{

    const editor=useRef(null)
    const[content,setContent]=useState ('')


 const [categories,setCategories]= useState([])

 const config={
    placeholder:"Start Typing..."
 }

    useEffect(

        ()=>{
            
      loadAllCategories().then((data)=>{
        console.log(data);
        setCategories(data)
      }).catch (error=>{

        console.log(error);
      })

        },[]
    )
    return(

        <div className="wrapper">

            <Card className="shadow-sm  border-0 mt-2">

    <CardBody> 

        <h3> What going in your mind ?</h3>
        <Form>

            <div className="my-3">
                <Label for="title"> Post title </Label>
                <Input 
                type="text"
                 id="title"
                 placeholder="Enter here "
                 className="rounded-0"
                />
            </div>

            <div className="my-3">
                <Label for="content"> Post Content </Label>
                {/* <Input 
                type="textarea"
                 id="content"
                 placeholder="Enter here "
                 className="rounded-0"
                 style={{height:'300px'}}
                /> */}

                <JoditEditor
                 ref={editor}
                //   this is the refresh to new content
                 value={content}
                 config={config}
                 onChange ={newContent=>setContent(newContent)}
                />


                
            </div>
            <div className="my-3">
                <Label for="category"> Post Category </Label>
                <Input 
                type="select"
                 id="category"
                 placeholder="Enter here "
                 className="rounded-0"
                  
                >
                {/* this is the jsx  */}
                {

                    categories.map((category)=>(
                      
                   <option value={category.categoryId} key={category.categoryId}>
                    {/* display the categories */}
                    {category.categoryTitle}
                   </option>

                    ))
                }
                           
                     
                    </Input>
            </div>

            <Container className="text-center">
                <Button className="rounded-0" color="primary"> Create Post</Button>
                <Button className="rounded-0 ms-2" color="danger"> Reset Content</Button>
            </Container>
        </Form>
        {content}
    </CardBody>


            </Card>
        </div>
        
    )
 }

 export default AddPost