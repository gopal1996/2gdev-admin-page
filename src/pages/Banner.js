import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { ImageUpload, Input, TextArea } from '../components/Input'
import { BASE_URL } from '../data/env'

const Banner = ({data}) => {
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
        postHeaders.append("Authorization",localStorage.getItem("token"))

        if(file && founderFile) {
            Promise.all([
                fetch(`${BASE_URL}/uploader/alphas9`, {
                    method: "POST",
                    body: imageData,
                    redirect: "follow"
                })
                .then(res => res.json()),
                fetch(`${BASE_URL}/uploader/alphas9`, {
                    method: "POST",
                    body: FounderData,
                    redirect: "follow"
                })
                .then(res => res.json())
            ]).then(([bgImageRes, founderImageRes]) => {
                console.log(bgImageRes, founderImageRes)
                setFilePath(`${BASE_URL}/${bgImageRes.desc}`)
                setFounderFilePath(`${BASE_URL}/${founderImageRes.desc}`)
                setFile("")
                setFounderFile("")


                let tempFilePath = `${BASE_URL}/${bgImageRes.desc}`
                let tempFounderFilePath = `${BASE_URL}/${founderImageRes.desc}`

                const sectionData = {
                    "founderimg": JSON.stringify([tempFounderFilePath]),
                    "foundername": JSON.stringify([name]),
                    "founderrole": JSON.stringify([role]),
                    "header": JSON.stringify([heading]),
                    "image": JSON.stringify([tempFilePath]),
                    "paragraph": JSON.stringify([description])
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
            if(file) {
                fetch(`${BASE_URL}/uploader/alphas9`, {
                    method: "POST",
                    body: imageData,
                    redirect: "follow"
                })
                .then(res => res.json())
                .then(data => {
                    setFilePath(`${BASE_URL}/${data.desc}`)
                    setFile("")

                    let tempFilePath = `${BASE_URL}/${data.desc}`

                    const sectionData = {
                        "founderimg": JSON.stringify([founderfilepath]),
                        "foundername": JSON.stringify([name]),
                        "founderrole": JSON.stringify([role]),
                        "header": JSON.stringify([heading]),
                        "image": JSON.stringify([tempFilePath]),
                        "paragraph": JSON.stringify([description])
                    }

                    fetch(`${BASE_URL}/update/all/3/${id}/`, {
                        headers: postHeaders,
                        method: "POST",
                        body: JSON.stringify(sectionData),
                        redirect: "follow"
                    }).then(res => res.json())
                    .then(data => console.log(data))

                })
            } else if(founderFile) {
                fetch(`${BASE_URL}/uploader/alphas9`, {
                    method: "POST",
                    body: FounderData,
                    redirect: "follow"
                })
                .then(res => res.json())
                .then(data => {
                    setFounderFilePath(`${BASE_URL}/${data.desc}`)
                    setFounderFile("")

                    let tempFounderFilePath = `${BASE_URL}/${data.desc}`

                    const sectionData = {
                        "founderimg": JSON.stringify([tempFounderFilePath]),
                        "foundername": JSON.stringify([name]),
                        "founderrole": JSON.stringify([role]),
                        "header": JSON.stringify([heading]),
                        "image": JSON.stringify([filepath]),
                        "paragraph": JSON.stringify([description])
                    }

                    fetch(`${BASE_URL}/update/all/3/${id}/`, {
                        headers: postHeaders,
                        method: "POST",
                        body: JSON.stringify(sectionData),
                        redirect: "follow"
                    }).then(res => res.json())
                    .then(data => console.log(data))

                })
            } else {
                const sectionData = {
                    "founderimg": JSON.stringify([founderfilepath]),
                    "foundername": JSON.stringify([name]),
                    "founderrole": JSON.stringify([role]),
                    "header": JSON.stringify([heading]),
                    "image": JSON.stringify([filepath]),
                    "paragraph": JSON.stringify([description])
                }

                fetch(`${BASE_URL}/update/all/3/${id}/`, {
                    headers: postHeaders,
                    method: "POST",
                    body: JSON.stringify(sectionData),
                    redirect: "follow"
                }).then(res => res.json())
                .then(data => console.log(data))
            }
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

export default Banner