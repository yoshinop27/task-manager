import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { ArrowLeftIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'
import api from '../lib/axios'

const CreatePage = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()){
      toast.error("All Fields Required")
      return
    }

    setLoading(true) 
    try {
      await api.post('/notes', {
        title, content
      })
      toast.success("Note Created Successfully")
      Navigate("/")
    } catch (error) {
      toast.error("Failed to Create")
      if (error.response.status === 429) {
        toast.error("Rate Limit Exceeded. Please try again later.", {
          duration: 4000,
        })
      }
    } finally {
      setLoading(false)
    }
  }
  return <div className='min-h-screen bg-base-200'>
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5'/> 
            Back to Notes
          </Link>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-control mb-4'>
                  <label className="label">
                    <span className='label-text'>Title</span>
                  </label>
                  <input type='text' placeholder='Note Title' className='input input-bordered' value={title}
                  onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='form-control mb-4'>
                  <label className="label">
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea placeholder='Note Content' className='textarea textarea-bordered h-32' value={content}
                  onChange={(e) => setContent(e.target.value)}></textarea>
                  <div className='card-actions justify-end'>
                    <button type='submit' className='btn btn-primary mt-4' disabled={loading}>
                      {loading ? "Creating..." : "Create Note"}
                    </button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
}

export default CreatePage