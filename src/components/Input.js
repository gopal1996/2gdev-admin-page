import React,{useEffect} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

export const TextArea = ({value, setValue}) => {
    return (
        <>
            <textarea className="form" name="" id="" cols="40" rows="20" value={value} onChange={event => setValue(event.target.value)}></textarea>
        </>
    )
}


export const Input = ({value, setValue, disabled}) => {
    return (
        <>
            <input type="text" className="form form--input" disabled={disabled} value={value} onChange={event => setValue(event.target.value)} />
        </>
    )
}

export const List = ({value, setValue, list, addList, removeItem}) => {

    return (
        <div>
            <ul className="list" onClick={removeItem}>
                {
                    list ? list.map((item, idx) => <li key={idx} className="item"><p className="text">{item}</p><span data-idx={idx} className="item-close">X</span></li>) : null
                }
            </ul>
            <input type="text" placeholder="Add Item" className="form form--input" name="list" value={value} onChange={evt => setValue(evt.target.value)} />
            <button className="btn btn--primary" onClick={addList} style={{marginTop: "2rem"}}>Add</button>
        </div>
    )
}

export const ImageList = ({listClassvalue, setListClassvalue, value, setValue, lists, addList, removeItem}) => {

    return (
        <div>
            <ul className="list" onClick={removeItem}>
                {
                    lists ? lists.map((item, idx) => (
                        <li className="item" key={idx}>
                            <div className="item-list">
                                <i className={`fa ${item.className}`}></i>
                                <p className="text">{item.value}</p>
                            </div>
                            <span data-idx={idx} className="item-close">X</span>
                        </li>
                    )
                    ) : null
                }
                
            </ul>
            <input type="text" placeholder="Enter fontawesome classname" className="form form--input" value={listClassvalue} onChange={evt => setListClassvalue(evt.target.value)} name="icons" />
            <input type="text" placeholder="Add Item" className="form form--input" name="list" value={value} onChange={evt => setValue(evt.target.value)} />
            <button className="btn btn--primary" onClick={addList} style={{marginTop: "2rem"}}>Add</button>
        </div>
    )
}

export const ImageUpload = ({file, setFile, filepath}) => {

    const ref = React.useRef();

    useEffect(() => {
        if(!file) {
            ref.current.value = "";
        }
    }, [file])

    return (
        <>
            {filepath? <div className="card">
                <img src={filepath} alt="User"/>
            </div> : null }
            <label style={{width: "100%"}}>
                <div className="card card--secondary">
                    { file.name ? null : <AiOutlinePlus style={{fontSize: "2rem", color: "#607188"}} />}
                    <input type="file" ref={ref} id="fileElem" accept="image/*" style={{"display": "none"}} onChange={e => setFile(e.target.files[0])}></input>
                    {file ? <h3>{file.name}</h3>:null}
                </div>
            </label>
        </>
    )
}

export const MultipleImageUpload = ({file, setFile, filepath}) => {

    const ref = React.useRef();

    useEffect(() => {
        if(!file) {
            ref.current.value = "";
        }
    }, [file])

    return (
        <>
            {filepath? <div className="card">
                {
                    filepath.map((item, idx) => <img key={idx} src={`http://python.alphas9.com/${item}`} alt="User"/>)
                }
            </div> : null }
            <label style={{width: "100%"}}>
                <div className="card card--secondary">
                    <AiOutlinePlus style={{fontSize: "2rem", color: "#607188"}} />
                    <input type="file" ref={ref} id="fileElem" accept="image/*" multiple style={{"display": "none"}} onChange={e => setFile(e.target.files)}></input>
                    
                </div>
            </label>
        </>
    )
}