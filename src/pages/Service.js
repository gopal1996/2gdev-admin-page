import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { ImageList, Input } from '../components/Input'

const Services = ({data}) => {
    const [id, setId] = useState(data?.SID)
    const [heading, setHeading] = useState(data?.value?.header[0])
    const [listvalue, setListvalue] = useState("")
    const [listClassvalue, setListClassvalue] = useState("")
    const [list, setList] = useState(data?.value?.icon)

    const addList = () => {
        setList(oldList => [...oldList, {value:listvalue,className: listClassvalue}])
        setListvalue("")
        setListClassvalue("")
    }

    const removeItem = (evt) => {
        let closeTarget = evt.target.dataset["idx"];
        if(closeTarget) {
            let newList = list.filter((item, index) => index !== Number(closeTarget))
            setList(newList)
        }
    }

    const saveHandler = () => {
        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")

        const sectionData = {
            "header": JSON.stringify([heading]),
            "icon": JSON.stringify(list),
        }

        fetch(`http://python.alphas9.com/update/all/3/${id}/`, {
            method: 'POST',
            headers: postHeaders,
            body: JSON.stringify(sectionData),
            redirect: "follow"
        })
        .then(res => res.json())
        .then(data => console.log("Else",data))
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__content">
                        <div className="about__text">
                            <p>ID:</p>
                            <Input disabled value={id} setValue={setId} />
                            <p>Heading:</p>
                            <Input value={heading} setValue={setHeading} />
                            <p>List:</p>
                            <ImageList listClassvalue={listClassvalue} setListClassvalue={setListClassvalue} value={listvalue} setValue={setListvalue} lists={list} addList={addList} removeItem={removeItem}/>
                        </div>
                    </div>
                    <div className="about__cta">
                        <p>For svg link, use font awesome link and copy class name and paste above input box <a href="https://fontawesome.com/v4.7.0/icons/">Font Awesome</a></p>
                        <button className="btn btn--primary" onClick={saveHandler}>Save</button>
                        <DangerButton>Cancel</DangerButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
