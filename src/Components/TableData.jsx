import React from 'react'
import { useDispatch } from 'react-redux';
import { editData, remove } from '../feature/data/dataSlice';

const TableData = ({data, index}) => {

    const {id, name, note, email, language, hobby} = data;
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        // console.log(id);
        dispatch(remove(id));
    }

    const handleEdit = (data) => {
        console.log("Edit Done!!");
        dispatch(editData(data))
    }

  return (
    <tr className='py-3 my-2 '>
    <th scope="row">{index + 1}</th>
    <td>{name}</td>
    <td>{email}</td>
    <td>{note}</td>
    <td>{language}</td>
    <td>{hobby}</td>
    <td>
        <span>
            <button className='bg-warning text-sm font-bold text-white px-2 py-1' onClick={() => handleEdit(data)}>Edit</button>
            <button className='bg-danger text-sm font-bold text-white px-2 py-1' onClick={() => handleDelete(id)}>Delete</button>
        </span>
    </td>
</tr>
  )
}

export default TableData