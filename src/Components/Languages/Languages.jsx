import lan_style from '../Languages/Languages.module.css'
import item1 from '/src/assets/html.png'
import item2 from '/src/assets/css.png'
import item3 from '/src/assets/js.png'
import item4 from '/src/assets/react.png'
import item5 from '/src/assets/Wordpress.png'
import item6 from '/src/assets/Figma.png'

const Languages = () => {


    return (
        <section className={lan_style.main} id='languages'>
            <div className={lan_style.cards}>

                <div className={lan_style.individual}>
                    <img src={item1} alt="language icon" />
                    <h2>HTML</h2>
                </div>
                <div className={lan_style.individual}>
                    <img src={item2} alt="language icon" />
                    <h2>CSS</h2>
                </div>
                <div className={lan_style.individual}>
                    <img src={item3} alt="language icon" />
                    <h2>JavaScript</h2>
                </div>
                <div className={lan_style.individual}>
                    <img src={item4} alt="language icon" />
                    <h2>React</h2>
                </div>
                <div className={lan_style.individual}>
                    <img src={item5} alt="language icon" />
                    <h2>WordPress</h2>
                </div>
                <div className={lan_style.individual}>
                    <img src={item6} alt="language icon" />
                    <h2>Figma</h2>
                </div>
            </div>


        </section>
    )
}

export default Languages;