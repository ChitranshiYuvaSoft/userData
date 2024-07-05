import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allData : [
        {id : 1, name : "Riya", email : "riya@gmail.com", note : "Riya, This note is your.", language : "English", hobby : "Travelling"},
        {id : 2, name : "Sonu", email : "sonu@gmail.com", note : "Sonu, This note is your.", language : "English", hobby : "Dancing"},
        {id : 3, name : "Ruhan", email : "ruhan@gmail.com", note : "Ruhan, This note is your.", language : "Hindi", hobby : "Singing"},
        {id : 4, name : "Bhavya", email : "bhavya@gmail.com", note : "Bhavya, This note is your.", language : "English", hobby : "Sketching"},
        {id : 5, name : "Anuj", email : "anuj@gmail.com", note : "Anuj, This note is your.", language : "Hindi", hobby : "Travelling"},
        {id : 6, name : "Ruhan", email : "ruhan@gmail.com", note : "Ruhan, This note is your.", language : "Hindi", hobby : "Singing"},
        {id : 7, name : "Bhavya", email : "bhavya@gmail.com", note : "Bhavya, This note is your.", language : "English", hobby : "Sketching"},
        {id : 8, name : "Anuj", email : "anuj@gmail.com", note : "Anuj, This note is your.", language : "Hindi", hobby : "Travelling"},
    ],
    edit : {data : {} , isEdit : false},
    isLoading : false,
    isError : false,
    isSuccess : false
}

const dataSlice = createSlice({
    name : "data", initialState,
    reducers : {
        remove : (state, action) => {
            return {
                ...state,
                allData : state.allData.filter(item  => item.id !== action.payload)
            }
        },
        add : (state, action) => {
            return {
                ...state,
                allData : [action.payload, ...state.allData],
            }
        },
        editData : (state, action) => {
            return {
                ...state,
                edit : {data : action.payload , isEdit : true}
            }
        },
        update : (state, action) => {
            return {
                ...state,
                allData : state.allData.map((item) => item.id === action.payload.id ? action.payload : item),
                edit : {data : {} , isEdit : false}
            }
        }
    },
    extraReducers : (builder) => {}
});

export const {remove, add, editData, update} = dataSlice.actions;
 
export default dataSlice.reducer;