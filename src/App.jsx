import { useState } from 'react'
import IsDesktop from './layouts/IsDesktop'
import IsMobile from './layouts/IsMobile'

export default () => {
    const [content, setContent] = useState(false)

    return <>
        <section className="hidden sm:block">
            <IsDesktop />
        </section>
        <section className="sm:hidden">
            <IsMobile content={content} callback={setContent} />
        </section>
    </>
}
