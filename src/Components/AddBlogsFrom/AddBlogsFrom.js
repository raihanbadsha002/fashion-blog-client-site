import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddBlogsFrom.css'

export default function AddBlogsFrom() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data, e) => {
      e.target.reset();
        const servicesData = {
            btitle: data.title,
            category: data.category,
            author: data.author,
            date: data.date,
            shortDescription: data.shortDescription,
            description: data.description,
            imageURL: imageURL

        }
        const url = `https://aqueous-forest-80856.herokuapp.com/addBlogs`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(servicesData)
        })
        .then(res => alert("Blog Add Successfully"))


    };
  
    const handelImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'bf42fd7632cf6f7f9d130dcb0f0b47cb');
        imageData.append('image', event.target.files[0]);
  
        axios.post('https://api.imgbb.com/1/upload',
          imageData)
        .then(function (response) {
            console.log(response.data.data.display_url);
          setImageURL(response.data.data.display_url);

        })
        .catch(function (error) {
          console.log(error);
        });
  
      }

    return (
        <div className="col-md-10">
        <div className="ml-4 mt-3 bg-white shadow rounded p-4">
           <form className="" onSubmit={handleSubmit(onSubmit)}>
                   <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="BlogTitle" className="form-label">Blog Title</label>
                          <input type="text"  {...register("title", { required: true })} placeholder="Enter Blog title"  className="form-control py-2" />
                           {errors.title && <span className="text-danger">Blog Title field is required</span>}
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="BlogCategory" className="form-label">Blog Category</label>
                          <input type="text"  {...register("category", { required: true })} placeholder="Enter Blog Category"  className="form-control py-2" />
                           {errors.category && <span className="text-danger">Blog Category field is required</span>}
                        </div>
                    </div>
                   </div>
                   <div className="form-group">
                   <div className="row mt-2">
                      <div className="col-md-6">
                         <label htmlFor="Author" className="form-label">Author</label>
                        <input type="text" {...register("author", { required: true })}  className="form-control py-2" placeholder="Enter author name"  />
                         {errors.author && <span className="text-danger">Author field is required</span>}     
                      </div>
                     <div className="col-md-6">
                       <label htmlFor="date" className="form-label">Post Date</label>
                       <input type="date" {...register("date", { required: true })}  className="form-control py-2" placeholder="Enter post date"  />
                        {errors.date && <span className="text-danger">Post Date is required</span>}     
                     </div>
                    </div>
                  </div>

                   <div className="form-group">
                   <div className="row mt-2">
                      <div className="col-md-6">
                        <label htmlFor="ServicesPrice" className="form-label">Short Description</label>
                        <textarea  type="text" {...register("shortDescription", { required: true })} placeholder="Enter short description"  className="form-control py-2" rows="4"></textarea>
                        {errors.shortDescription && <span className="text-danger">Short Description field is required</span>}      
                      </div>
                     <div className="col-md-6">
                        <label htmlFor="ServicesPrice" className="form-label">Description</label>
                        <textarea  type="text" {...register("description", { required: true })} placeholder="Enter full description"  className="form-control py-2" rows="4"></textarea>
                        {errors.description && <span className="text-danger">Description field is required</span>}     
                     </div>
                    </div>
                  </div>
                   <div className="form-group mt-2">
                      <label htmlFor="file" className="form-label custom-file-upload"><FontAwesomeIcon icon={faUpload}/> Image Upload</label>
                      <input  type="file" id="file" {...register("image", { required: true })} onChange={handelImageUpload}/>
                      {errors.image && <span className="text-danger">Upload the Blog Banner</span>} 
                   </div>
                   <div className="form-group mt-4">
                       <button type="submit" className="btn btn-info px-5 py-2">Submit</button>
                   </div>
               </form>
           </div>
       </div>
    )
}
