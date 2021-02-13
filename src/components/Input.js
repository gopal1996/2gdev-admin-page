import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

export const TextArea = ({value, setValue}) => {
    return (
        <>
            <textarea className="form" name="" id="" cols="40" rows="20" value={value} onChange={event => setValue(event.target.value)}></textarea>
        </>
    )
}


export const Input = ({value, setValue}) => {
    return (
        <>
            <input type="text" className="form form--input" value={value} onChange={event => setValue(event.target.value)} />
        </>
    )
}

export const List = ({value, setValue, list, addList, removeItem}) => {

    return (
        <div>
            <ul className="list" onClick={removeItem}>
                {
                    React.Children.toArray(
                        list.map((item) => <li className="item"><p className="text">{item.listvalue}</p><span data-idx={item.id} className="item-close">X</span></li>)
                    )
                }
            </ul>
            <input type="text" placeholder="Add Item" className="form form--input" name="list" value={value} onChange={evt => setValue(evt.target.value)} />
            <button className="btn btn--primary" onClick={addList} style={{marginTop: "2rem"}}>Add</button>
        </div>
    )
}

export const ImageUpload = () => {

    return (
        <>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="User"/>
            </div>
            <div className="card card--secondary">
                <AiOutlinePlus style={{fontSize: "2rem", color: "#607188"}} />
            </div>
        </>
    )
}