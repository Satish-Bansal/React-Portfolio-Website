import style from '../Experience/Experience.module.css'
import company1 from '/src/assets/web-colonizer (1).png'
import company2 from '/src/assets/RLF (2).png'

const Experience = () => {

    return (
        <div className={style.main} id='experience'>
            <h1>My <span>Experiece</span></h1>
            <div className={style.experience}>


                <div className={style.exp_1}>
                    <div className={style.img}>
                        <img src={company1} alt="company logo" />
                    </div>
                    <div className={style.cont}>
                        <p>July 2024 to October 2024</p>
                        <span>Designation</span>
                        <h2>Wordpress Developer Intern</h2>
                        <span>Responsibilities</span>
                        <h2>Creating Layouts, Maintenance, Adding Functionality Raw coding</h2>
                    </div>
                </div>


                <div className={style.exp_1}>
                    <div className={style.img}>
                        <img src={company2} alt="company logo" />
                    </div>
                    <div className={style.cont}>
                        <p>October 2024 to Ongoing 2025</p>
                        <span>Designation</span>
                        <h2>Website Developer Intern</h2>
                        <span>Responsibilities</span>
                        <h2>Creating Complete website, Maintenance Existing PHP website, Adding Functionality, Raw coding, C-panel</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience