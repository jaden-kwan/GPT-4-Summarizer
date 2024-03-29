import {logo} from '../assets/';

const Hero = () => {
    return (

        <header className="w-full flex
        justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src ={logo} alt="sumz_logo"
                className="w-28 object-cotain" />
                <button
                type="button"
                onClick={() => window.open('https://github.com/jaden-kwan/GPT-4-Summarizer')}
                className="black_btn"
                >
                    GitHub
                </button>
            </nav>
        </header>
    )
}

export default Hero