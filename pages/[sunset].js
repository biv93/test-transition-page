import style from "../styles/Home.module.scss";
import { useRouter } from "next/dist/client/router";
import { motion, AnimatePresence } from "framer-motion"

const Name = () => {
    const {
        query: {sunset}
    } = useRouter();
    console.log(sunset);
    return(
        <div className={style["sunset-detail"]}>
            <h1>{sunset}</h1>
            <AnimatePresence>
            <motion.img 
                layoutId={sunset}
                className={style["sunset-detail--big-image"]}
                src={"./assets/"+sunset+".jpg"}/>
            </AnimatePresence>
          
        </div>
    )
}

export default Name;