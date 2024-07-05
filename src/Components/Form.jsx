import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, update } from '../feature/data/dataSlice';

const Form = () => {

    const {edit} = useSelector(state => state.data);

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        note: "",
        hobby: "",
        language: ""
    });

    // console.log(formData);

    const { name, email, note, hobby, language } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       if(edit.isEdit){
        dispatch(update({
            id : edit.data.id,
            name,
            email,
            note,
            language,
            hobby
        }))
       }else{
        dispatch(add(formData))
       }
       setFormData({
        name: "",
        email: "",
        note: "",
        hobby: "",
        language: ""
       })
    }

    useEffect(()=>{
        setFormData({
            name : edit.data.name,
            email : edit.data.email,
            note : edit.data.note,
            hobby : edit.data.hobby,
            language : edit.data.language
        })
    },[edit])

    return (
        <form action="" className='shadow-lg p-4  w-[100%] h-[80%] flex items-center justify-around flex-column ' onSubmit={handleSubmit}>
            <span className='w-full h-[20%] flex items-center justify-between'>
                <input type="text" required placeholder='Enter name here' className='w-[49.5%] border-none form-control rounded-0 py-2 px-3 text-base' name="name" value={name} onChange={handleChange} />
                <input type="email" required placeholder='Enter email here' className='w-[49.5%] border-none form-control rounded-0 py-2 px-3 text-base' name="email" value={email} onChange={handleChange} />
            </span>

            {/* <span className='w-full h-[50%] flex items-center justify-between'> */}
                <textarea rows={4} cols={20} placeholder='Write Note Here' className='border-none  form-control rounded-0 py-2 px-3 text-base' name="note" value={note} onChange={handleChange} ></textarea>
                {/* <span className='w-[49.5%] pl-6 h-[100%] flex items-start justify-around flex-column'> */}
                    <h6 className='font-bold text-slate-600 text-start w-full mt-2'>Select Your Language</h6>
                    <span className='w-full my-2'>
                        <input type="radio" id="hindi" name="language" value={"English"}  className="mr-4" onChange={handleChange} />
                        <label htmlFor="hindi">English</label><br />
                    </span>
                    {/* <div className='w-full h-[1px] bg-black'></div> */}
                    <select placeholder='Enter Desciption Here' className='border-none form-control rounded-0 py-2 px-3 text-base' name="hobby" value={hobby} onChange={handleChange} >
                        <option value="">Choose Hobby Here..</option>
                        <option value="bookreading">Book Reading</option>
                        <option value="sketching">Sketching</option>
                        <option value="travelling">Travelling</option>
                    </select>
                {/* </span> */}
            {/* </span> */}

            <button className='form-control bg-success rounded-0 mt-2 text-white text-lg ]'>Submit</button>
        </form>
    )
}

export default Form