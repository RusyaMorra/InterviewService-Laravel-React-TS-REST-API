import React from "react";
import MyInput from "../../../UI/MyInput/MyInput"
import MySelect  from "../../../UI/MySelect/MySelect"
const PostFilter=({filter, setFilter})=> {






    return(

        <div>
            <MyInput
            value = {filter.query}
            onChange = {e => setFilter({...filter, query: e.target.value})}
            title = {"Поиск"}
            />
            <MySelect
            value = {filter.sort}
            onChange = {selectedSort =>setFilter({...filter, sort: selectedSort}) }
            defaultValue = {'Сортировка по'}
            options = {[
                {value: 'title', name: 'по названию'},
                {value: 'body', name: 'по описанию'}
            ]}
            />
        </div>


    )


};


export default PostFilter
