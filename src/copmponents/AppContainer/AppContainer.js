import s from '../AppContainer/AppContainer.module.css'

function AppContainer({ children }) {
    return <div className={s.container}>{children}</div>
}

export default AppContainer