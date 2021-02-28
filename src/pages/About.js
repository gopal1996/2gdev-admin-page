import React, {useState} from 'react'

import { DangerButton } from '../components/Button'
import { TextArea, Input, ImageUpload, List } from '../components/Input'
import { BASE_URL } from '../data/env'

const About = ({data}) => {
    const [id, setId] = useState(data?.SID)
    const [heading, setHeading] = useState(data?.value?.header[0])
    const [subheading, setSubHeading] = useState(data?.value?.subheading[0])
    const [file, setFile] = useState("")
    const [filepath, setFilePath] = useState(data?.value?.image[0])
    const [description, setDescription] = useState(data?.value?.paragraph[0])
    const [listvalue, setListvalue] = useState("")
    const [list, setList] = useState(data?.value?.list)

    const saveHandler = () => {
        const imageData = new FormData();
        imageData.append("file", file)
        

        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")
        postHeaders.append("authorization",localStorage.getItem("token"))

        if(file) {
            fetch(`${BASE_URL}/uploader/alphas9`, {
                method: "POST",
                body: imageData,
                redirect: "follow"
            })
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
            })
            .then(data => {
                setFilePath(`${BASE_URL}/${data.desc}`)
                setFile("")

                let tempFilePath = `${BASE_URL}/${data.desc}`

                const sectionData = {
                    "Paragraph": JSON.stringify([description]),
                    "Subheading": JSON.stringify([subheading]),
                    "header": JSON.stringify([heading]),
                    "image": JSON.stringify([tempFilePath]),
                    "list": JSON.stringify(list)
                }

                fetch(`${BASE_URL}/update/all/${window.location.pathname.split("/")[1]}/${id}/`, {
                    headers: postHeaders,
                    method: "POST",
                    body: JSON.stringify(sectionData),
                    redirect: "follow"
                }).then(res => res.json())
                .then(data => console.log(data))
            })
        } else {
            const sectionData = {
                "Paragraph": JSON.stringify([description]),
                "Subheading": JSON.stringify([subheading]),
                "header": JSON.stringify([heading]),
                "image": JSON.stringify([filepath]),
                "list": JSON.stringify(list)
            }

            fetch(`${BASE_URL}/update/all/${window.location.pathname.split("/")[1]}/${id}/`, {
                method: 'POST',
                headers: postHeaders,
                body: JSON.stringify(sectionData),
                redirect: "follow"
            })
            .then(res => res.json())
            .then(data => console.log("Else",data))
        }
        
    }


    const addList = () => {
        setList(oldList => [...oldList, listvalue])
        setListvalue("")
    }

    const removeItem = (evt) => {
        let closeTarget = evt.target.dataset["idx"];
        if(closeTarget) {
            let newList = list.filter((item, index) => index !== Number(closeTarget))
            setList(newList)
        }
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__image">
                        <ImageUpload file={file} setFile={setFile} filepath={filepath} />
                    </div>
                    <div className="about__content">
                        <div className="about__text">
                            <p>ID:</p>
                            <Input disabled value={id} setValue={setId} />
                            <p>Heading:</p>
                            <Input value={heading} setValue={setHeading} />
                            <p>Sub Heading:</p>
                            <Input value={subheading} setValue={setSubHeading} />
                            <p>Description:</p>
                            <TextArea value={description} setValue={setDescription} />
                            <p>List:</p>
                            <List value={listvalue} setValue={setListvalue} list={list} addList={addList} removeItem={removeItem}/>
                        </div>
                    </div>
                    <div className="about__cta">
                        <button className="btn btn--primary" onClick={saveHandler}>Save</button>
                        <DangerButton>Cancel</DangerButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
