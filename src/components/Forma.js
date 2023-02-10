import "./Forma.css"
function Forma(){
 
    return(
        <div className="center">
            <h3>Pišite nam</h3>
            <div>
                <form >
                    <input type="text" placeholder='Ime' className=' form-control '  />
                    <input type="text" placeholder='Prezime' className=' form-control ' />
                    <input type="email" placeholder='Mail' className=' form-control ' />
                    <textarea type="text" placeholder='Poruka' className=' form-control' rows="3"/>
                    <button  onClick={()=>{ alert('Uspesno ste se poslali poruku!');}} className=' btn'>Pošalji</button>
                </form>
            </div>
           
        </div>
        
       
    );
}
export default Forma;