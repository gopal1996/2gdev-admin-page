import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { Input, MultipleImageUpload } from '../components/Input'

const Gallery = ({data}) => {
    const [id, setId] = useState(data?.SID)
    const [heading, setHeading] = useState(data?.value?.header[0])
    const [subheading, setSubHeading] = useState(data?.value?.subheader[0])
    const [file, setFile] = useState("")
    const [filepath, setFilePath] = useState(data?.value?.images)

    const saveHandler = () => {
        
        const imageData = new FormData();

        for(let i=0; i<file.length; i++) {
            imageData.append("file", file[i])
        }

        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")

        if(file) {
            fetch("http://python.alphas9.com/uploader_multi/alphas9", {
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
                setFilePath(data.desc)
                setFile("")

                const sectionData = {
                    "Subheading": JSON.stringify([subheading]),
                    "header": JSON.stringify([heading]),
                    "image": JSON.stringify(data.desc)
                }

                fetch(`http://python.alphas9.com/update/all/3/${id}/`, {
                    headers: postHeaders,
                    method: "POST",
                    body: JSON.stringify(sectionData),
                    redirect: "follow"
                }).then(res => res.json())
                .then(data => console.log(data))
            })
        } else {
            const sectionData = {
                "Subheading": JSON.stringify([subheading]),
                "header": JSON.stringify([heading]),
                "image": JSON.stringify(filepath)
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

    }


    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__image">
                        <MultipleImageUpload file={file} setFile={setFile} filepath={filepath} />
                    </div>
                    <div className="about__content">
                        <div className="about__text">
                            <p>ID:</p>
                            <Input disabled value={id} setValue={setId} />
                            <p>Heading:</p>
                            <Input value={heading} setValue={setHeading} />
                            <p>Sub Heading:</p>
                            <Input value={subheading} setValue={setSubHeading} />
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

export default Gallery
