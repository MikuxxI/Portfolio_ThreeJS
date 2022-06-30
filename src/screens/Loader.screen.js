import '../assets/scss/screen/loader.assets.scss'

const Loader = () => {
    const list = []

    for (let i = 1; i < 7; i++) {
        const name = "loader-0" + i
        list.push(
            <div className='box'>.{name}
                <div className={name}></div>
            </div>
        )
    }

    console.log(list)

    return (
        <div className='front'>
            {list.map((elem) => {
                return(<>{elem}</>)
            })}
        </div>
    )
}
  
export default Loader;