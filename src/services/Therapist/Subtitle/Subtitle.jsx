import './Subtitle.css'
import Subtitle2 from './Subtitle2'

export default function Subtitle() {
    return(
        <div id="subtitle">
            <h2 className='tex'>Подзаголовок 1</h2>
            <p className='tex'>В нашей клинике имеются как врачи-терапевты общей практики, так и узкие специалисты по ряду
             перечисленных областей, что дает возможность излечивать тяжелые и редкие случаи патологий.</p>
             <img src="/img/Dog.svg" alt="" />
            <p className='tex'>
            <p className='tex'>Врач-терапевт подходит к лечению животного комплексно, предварительно изучив его анамнез, учитывая возраст, пол, породу, наличие хронических болезней, условия содержания, типа кормления, оценив общее состояние питомца, полностью осмотрев его и назначив необходимую диагностику и соответствующее лечение.</p>
            <p className='tex'>Врачи клиники имеют широкий спектр диагностических возможностей, что является идеальным условием для постановки точного диагноза, а значит и назначения того лечения, которое наиболее эффективно справится с данным конкретным клиническим случаем.</p>
            <p>Некоторую диагностику можно провести тут же на месте в течение буквально нескольких минут, что немаловажно для экстренных случаев и значительно экономят время владельцам:</p>
            <p>- гематологический и биохимический анализы крови;</p>
            <p>- исследование Т4 и кортизол;</p>
            <p>- анализ газов крови;</p>
            <p>- рентген;</p>
            <p>- ультразвуковое исследование брюшной полости и сердца;</p>
            <p>- микроскопия мазков и соскобов;</p>
            <p>- люминесцентный тест на лишай;</p>
            <p>- экспресс-анализы на основные вирусные заболевания.</p>
            </p>
        </div>
    )
}