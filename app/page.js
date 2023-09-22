import Image from "next/image";
import nasaLogo from "@/public/logo.svg";
import style from "@/app/Home.module.scss";
export default function Home() {
  return (
<<<<<<< HEAD
    <main className="">

    </main>
=======
    <>
        <div className={style.header}><Image src={nasaLogo} alt={"NASA"} height={100}/>
            <div>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    </>
>>>>>>> bd90256aff679344e34011c1b8012bd0ab532f6f
  )
}
