import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "./Components/Select"

function App() {
    const [options, setOptions] = useState([])    
    const [posts, setPosts] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((result) => {
                console.table(result.data)
                const selectOptions = [];
                result.data.forEach(user => {
                    selectOptions.push({ value: user.id, text: user.username })
                })
                setOptions(selectOptions)
            })

    }, [])  

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((result) => {
                console.table(result.data)
                setPosts(result.data)
            })
    return(()=>{

    })
    }, [])  



  

    const handleOnSelectChange = (value) => {
        setSelectedId(value)
        
        console.log('vlera e zgjedhur nga selecti', value)
        test = value;
    }

    return (
        <>
            <div>User Data: </div>
            <Select options={options} onChange={handleOnSelectChange} />
            <ul>
                {posts.filter(post=>(post.userId === Number(selectedId))).map(post=>{

                    return(
                        <li>{post.title}</li>
                    )
                })}
            </ul>
        </>

        

    )

}
export default App