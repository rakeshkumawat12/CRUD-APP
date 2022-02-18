import React, {useContext, useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'


export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  });
  const navigate = useNavigate();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId)
    setSelectedUser(selectedUser)
  }, [currentUserId, users])

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser)
    navigate.push('/');
  }

  const onChange = (e) => {
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
  }
  return (
    <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="Enter Name" required></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}
