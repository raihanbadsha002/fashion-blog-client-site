import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ManageBlogsData({post, fetchBlogList}) {

    const deleteBlog = (id) => {
        
        fetch(`https://aqueous-forest-80856.herokuapp.com/deleteBlog/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => fetchBlogList())
        
    }
    return (
        <>
        <tr>
            <td>{post.btitle}</td>
            <td>{post.date}</td>
            <td>
            <span style={{cursor: "pointer"}} className="bg-success text-white p-1"> <FontAwesomeIcon icon={faEdit}/> </span> <span className="bg-danger text-white p-1 ml-2" style={{cursor: "pointer"}} onClick={() => deleteBlog(post._id)}><FontAwesomeIcon icon={faTrashAlt}/></span>        
            </td>
        </tr>
    </>
    )
}
