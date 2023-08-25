import { selectSideBar } from "../reducers/sidebarToggleSlice";
import { selectSidebarWidth } from "../reducers/sidebarWidthSlice";
import { useAppSelector } from "../store/hook";
import styles from "../styles/home.module.css";

export default function Home() {
    const isOpen = useAppSelector(selectSideBar);
    const sidebarWidth = useAppSelector(selectSidebarWidth);

    //transition: 'left 0.2s ease-in-out'

    const style = isOpen
        ? {
            left: sidebarWidth,
            width: window.innerWidth - sidebarWidth,
        }
        : {
            left: 0,
            width: window.innerWidth,
        };

    return (
        <div className={styles["main-container"]} style={style}>
            <div className={styles.section}>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cum
                    impedit porro dicta, error debitis explicabo architecto velit, iste
                    facere unde iusto repellendus aliquam consequuntur obcaecati quas ab!
                    Fugit, quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis.Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Adipisci cum impedit porro dicta, error debitis
                    explicabo architecto velit, iste facere unde iusto repellendus aliquam
                    consequuntur obcaecati quas ab! Fugit, quis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cum
                    impedit porro dicta, error debitis explicabo architecto velit, iste
                    facere unde iusto repellendus aliquam consequuntur obcaecati quas ab!
                    Fugit, quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis.Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Adipisci cum impedit porro dicta, error debitis
                    explicabo architecto velit, iste facere unde iusto repellendus aliquam
                    consequuntur obcaecati quas ab! Fugit, quis.

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cum
                    impedit porro dicta, error debitis explicabo architecto velit, iste
                    facere unde iusto repellendus aliquam consequuntur obcaecati quas ab!
                    Fugit, quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis.Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Adipisci cum impedit porro dicta, error debitis
                    explicabo architecto velit, iste facere unde iusto repellendus aliquam
                    consequuntur obcaecati quas ab! Fugit, quis.

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cum
                    impedit porro dicta, error debitis explicabo architecto velit, iste
                    facere unde iusto repellendus aliquam consequuntur obcaecati quas ab!
                    Fugit, quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Adipisci cum impedit porro dicta, error
                    debitis explicabo architecto velit, iste facere unde iusto repellendus
                    aliquam consequuntur obcaecati quas ab! Fugit, quis. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Adipisci cum impedit
                    porro dicta, error debitis explicabo architecto velit, iste facere
                    unde iusto repellendus aliquam consequuntur obcaecati quas ab! Fugit,
                    quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci cum impedit porro dicta, error debitis explicabo architecto
                    velit, iste facere unde iusto repellendus aliquam consequuntur
                    obcaecati quas ab! Fugit, quis.Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Adipisci cum impedit porro dicta, error debitis
                    explicabo architecto velit, iste facere unde iusto repellendus aliquam
                    consequuntur obcaecati quas ab! Fugit, quis.

                </p>
            </div>
        </div>
    );
}
