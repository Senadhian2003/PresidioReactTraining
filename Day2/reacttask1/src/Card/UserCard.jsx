import React from 'react'
import './Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({post}) {
  console.log(post)
  return (
    <div className='post-card'>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text className='content'>
          {post.body}
        </Card.Text>
       <div style={{display: 'flex', justifyContent:"space-between"}} >
       <p> Likes : {post.reactions.likes} </p>
       <p> Likes : {post.reactions.dislikes} </p>
       </div>
       {post.id==8 && <> <button>Edit</button> <button>Delete</button> </>}
      </Card.Body>
    </Card>

    </div>
  )
}

export default UserCard