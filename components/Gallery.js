import styles from './Gallery.module.css'
import Image from "next/image"

export default function Gallery() {
    return (
        <main>
            <div className={styles.gallery}>
                <Image src="https://res.cloudinary.com/avidu/image/upload/v1656003940/cld-sample-5.jpg" width={500} height={300} />
                <Image src="https://res.cloudinary.com/avidu/image/upload/v1656003939/cld-sample-3.jpg" width={500} height={300} />
                <Image src="https://res.cloudinary.com/avidu/image/upload/v1656003939/cld-sample-2.jpg" width={500} height={300} />
                <Image src="https://res.cloudinary.com/avidu/image/upload/v1656003938/cld-sample.jpg" width={500} height={300} />
                <Image src="https://res.cloudinary.com/avidu/image/upload/v1656003912/sample.jpg" width={500} height={300} />
            </div>
        </main>
    )
}
