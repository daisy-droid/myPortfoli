// import "./education.css";

import aws from "../../images/awslogo.png";
import azure from "../../images/azurelogo.png"


// const Education =()=>
// {
//     return(
// <div className="E">
//     <div>
//       <h1 className="boom">Education</h1>
//     </div>
//     <div className="contaier flex">

   
        
// <div className="card w-96 bg-accent-content shadow-xl mt-5 ml-1 mr-1 ">
//   <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     {/* <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div> */}
//   </div>
// </div>
// <div className="card w-96 bg-accent-content shadow-xl mt-5 ml-1 mr-1">
//   <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     {/* <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div> */}
//   </div>
// </div>
// <div className="card w-96 bg-accent-content shadow-xl mt-5 ml-1 mr-1">
//   <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     {/* <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div> */}
//   </div>
// </div>
// </div>
// <div className="certi">
// <div className="card w-96 bg-accent-content shadow-xl mt-5 ml-1 mr-1">
//   <div className="card-body pic">
//   <img src={aws} alt="" className="i-img" />
//     <div className="card-actions justify-end">

//     </div>
//   </div>
// </div>
// <div className="card w-96 bg-accent-content shadow-xl mt-5 ml-1 mr-1">
//   <div className="card-body pic">
//   <img src={azure} alt="" className="i-img" />
  
//     <div className="card-actions justify-end">
     
//     </div>
//   </div>
// </div>

// </div>
// </div>

//     )
// }
// export default Education

import "./education.css";

const Education =()=>
{
     return (
       <div className="E">
        <div className="yeah">
         <div className="grid grid-cols-1 justify-center boom">
            
            <h1 className="headi"> Education</h1>
            <div className="ys">
            <div className="card w-48 bg-accent-content shadow-xl mt-5 ml-1 mr-">
  <div className="card-body">
    <h4 className="card-title">Tshwane University Of Technology</h4>
    <p className="descr">ND: Software Development</p>
    <h6 className="dat">2018-2021</h6>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
<div className=" card w-48 bg-accent-content shadow-xl mt-5 ml-1 mr-">
  <div className="card-body">
    <h2 className="card-title">System Support</h2>
    <p className="descr">NQ5 Learnership</p>
    <h6 className="dat">2022-present</h6>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
            </div>
            </div>
         <div className="grid grid-cols-1  justify-center boom">
           <h1 className="headi"> Certifications</h1>
           {/* <div className="grid grid-rows-2 r">
                    hugyftg

                 </div> */}
           <div className="grid grid-rows-2 s">
             <div className="certi col-start-1 
             col-end-7 ml-5">
               <div className="card w-48 bg-accent-content shadow-xl mt-5 ml-1 mr-1">
                 <div className="card-body pic">
                   <img src={aws} alt="" className="" />
                  
                 </div>
               </div>
               <div className="card w-48 bg-accent-content shadow-xl mt-5 ml-1 mr-1">
                 <div className="card-body pic">
                   <img src={azure} alt="" className="" />

                   
                 </div>
               </div>
             </div>
           </div>
         </div>
         </div>
       </div>
     );
}
export default Education;