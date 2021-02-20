import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { ImageUpload, Input, TextArea } from '../components/Input'

export const Banner = ({data}) => {
    const [id, setId] = useState(data?.SID)
    const [heading, setHeading] = useState(data?.value?.header[0])
    const [description, setDescription] = useState(data?.value?.paragraph[0])
    const [name, setName] = useState(data?.value?.foundername[0])
    const [role, setRole] = useState(data?.value?.founderrole[0])
    const [file, setFile] = useState("")
    const [filepath, setFilePath] = useState(data?.value?.image[0])
    const [founderFile, setFounderFile] = useState("")
    const [founderfilepath, setFounderFilePath] = useState(data?.value?.founderimg[0])

    const saveHandler = () => {
        const imageData = new FormData();
        imageData.append("file", file)

        const FounderData = new FormData();
        FounderData.append("file", founderFile)

        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")

        if(file) {
            setFilePath();
            setFounderFilePath();
        }
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__content">
                        <div className="about__text">
                            <p>Banner Image</p>
                            <div className="about__image">
                                <ImageUpload file={file} setFile={setFile} filepath={filepath} />
                            </div>
                            <p>ID:</p>
                            <Input disabled value={id} setValue={setId} />
                            <p>Heading:</p>
                            <Input value={heading} setValue={setHeading} />
                            <p>Description:</p>
                            <TextArea value={description} setValue={setDescription} />
                            <p>Name:</p>
                            <Input value={name} setValue={setName} />
                            <p>Role:</p>
                            <Input value={role} setValue={setRole} />
                            <p>Profile</p>
                            <div className="about__image">
                                <ImageUpload file={founderFile} setFile={setFounderFile} filepath={founderfilepath} />
                            </div>
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
