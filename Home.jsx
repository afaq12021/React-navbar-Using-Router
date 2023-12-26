import React from "react"
import h1 from "./images/h1.jpg"
import h2 from "./images/h2.jpg"

const Home=()=>{
    return(
        <>
        <br />
            <h1>Home Page</h1>
            <p>lorem10</p>
            <img src={h1} alt="h1" style={{height:"450px", width:"700px", marginLeft:"300px"}} />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nemo doloribus inventore quis sapiente nisi dolor, quod eligendi praesentium iusto eos vero perspiciatis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis labore animi fugit vitae at. Dolore inventore sunt dolor culpa? Dolorum culpa harum quis voluptates aliquid aperiam vero eius? Modi qui libero beatae incidunt quaerat quisquam odio eveniet magni, ex sunt officiis, corrupti similique aspernatur itaque, facilis excepturi suscipit fugit maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium, voluptates nobis, minus impedit harum vel fugiat corrupti repellat voluptatem quisquam perspiciatis illo quae? Porro nam nesciunt, blanditiis quaerat minus, modi obcaecati nemo facere eos, neque adipisci esse optio dolor at dicta! Quis unde, quidem quam quasi error ullam non dicta nulla quibusdam temporibus atque doloremque explicabo ad deleniti accusamus, quod, ipsam fugiat cupiditate illo iste? Illum unde magni architecto. Atque, voluptatibus. Reprehenderit facere natus magnam iste, aspernatur at, quasi quibusdam ad quis voluptatum voluptate inventore ullam placeat laborum laudantium tempore ut quod dignissimos exercitationem dolorem eveniet officia eaque voluptatem.</p>
            <img src={h2} alt="h2" style={{height:"450px", width:"700px", marginLeft:"300px", marginTop:"20px"}} />
            
        </>
    );
}
export default Home;