import Image from 'next/image'
import style from "./Home.module.scss";
import nasaLogo from '@/public/logo.svg';
import Header from '@/components/Header';

export default function Home() {
    return (
        <Header />
        <>
            <main>
                <div className={style.header}>
                    <Image src={nasaLogo} alt={"NASA"} height={100} width={100} />
                    <div>
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            </main>
        </>
    )
}
