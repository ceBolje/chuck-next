import {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router'
import {getJoke, getRandomJoke} from '../api/jokes';
import styles from "../../styles/Home.module.css";

export default function Pid(jokePid) {
    const router = useRouter();
    const [joke, setNextStory] = useState(jokePid);

    const handleNext = async () => {
        const json = await getRandomJoke();
        router.push('http://localhost:3000/chuck/'+ json.id, undefined, { shallow: true })

        setNextStory(json);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Chuck <a href="/chuck">Stories</a>
                </h1>
                <p>Simple jokes about Chuck Norris coolness</p>
                <div className={styles.chuckDance}></div>
                <p className={styles.quote}><span>"</span>{joke.value}<span>"</span></p>
                <button className={styles.btn} onClick={handleNext}>Next</button>
                <Link href="/chuck/[story.id]" as={`/chuck/${joke.id}`}>
                    <a>Link to joke</a>
                </Link>
            </main>
        </div>
    );
}

Pid.getInitialProps = async ({ query }) => {
        return await (query.pid) ? getJoke(query.pid) : getRandomJoke();
}
