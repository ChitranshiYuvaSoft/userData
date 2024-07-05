import React from 'react'
import TableData from './TableData'
import { useSelector } from 'react-redux'

const Table = () => {

    const {allData} = useSelector(state=> state.data);

    return (
        <table className="table py-4 overflow-y-scroll ">
            <thead className=''>
                <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Note</th>
                    <th scope="col">Language</th>
                    <th scope="col">Hobby</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody className='overflow-y-scroll'>
                {
                    allData.map((data, index) => <TableData data={data} key={index}/>)
                }
            </tbody>
        </table>
    )
}

export default Table