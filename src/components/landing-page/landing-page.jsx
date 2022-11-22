import "./landing-page.css"
import Me from "../../images/IMG-20221122-WA0001-removebg-preview.png"


const Landing = ()=>
{
    return ( 

    <div className="i">
                <div class="custom-shape-divider-top-1669022440">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    <div className="i-left">
        
        <div className="i-wrapper">
            <h2 className="i-intro">Hi, My name is </h2>
            <h1 className="i-name"> Ipeleng Mothibi</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">UI/UX Designer</div>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Web Developer</div>
                </div>
            </div>
            <div className="i-desc ">
            I am full-stack developer who enjoys trying out new technology, I pride myself in being a hard-worker that is not intimidated by learning new technologies which will be beneficial when the company has to adapt to new technologies and or uses technologies I'm not familiar with
            </div>
                    <div className="buttons mt-5 ">
                        <div>
                            <button
                                className=" text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mr-1 mb-1 ease-linear transition-all duration-150 ss"
                                type="submit"
                            >
                                Contact Me
                            </button>
                        </div>

                        <div>
                            <a  href="Ipeleng_Idah Mothibi_Resume.pdf" download="Ipeleng_Idah Mothibi_Resume.pdf">
                            <button
                                className=" resume text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ss"
                                type="submit"
                            >
                                Resume  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="" fill="currentColor" class="bi bi-file-earmark-arrow-down res" viewBox="0 0 16 16">
  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
</svg>
                            </button>
                            </a>
                        </div>
                    </div>


        
        </div>

    </div>
    <div className="i-right">
        <div className="i-bg">
        <img src={Me} alt="" className="i-img" />
        </div>
        
    </div>
      
</div>)
}
export default Landing