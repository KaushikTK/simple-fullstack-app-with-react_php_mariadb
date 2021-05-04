import React, { useState } from 'react';
import $ from 'jquery';


const Add = props =>{
    let [setAdd,setView,setViewAll] = props.active;
    setView('');
    setAdd('active');
    setViewAll('');

    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    const addItem = ()=>{
        $.ajax({
            type:'POST',
            url:'http://localhost/your_folder_name/add.php', // enter your folder name here
            data:{name:name,age:age},
            success: res=>{
                //console.log(res);
                if(res == 'added')
                {
                    setName('');
                    setAge('');
                    alert('Added');
                }
                else{
                    alert('There is some issue');
                }
            }
        })
    }

    return(<>
        <div className='container'>
            <div className='row' style={{height:'80vh'}}>
                <div className='col-md-6 mx-auto my-auto'>
                    <div className='card-body shadow'>
                    <center>
                    <h5 className='display-4'>Add</h5>
                    </center>
                    <input className='form-control' type='text' value={name} onChange={e=>setName(e.target.value)} placeholder='Item name'></input>
                    <br></br>
                    <input className='form-control' type='number' value={age} onChange={e=>setAge(parseInt(e.target.value))} placeholder='Age'></input>
                    <br/>
                    <center>
                    <button className='btn btn-dark' onClick={addItem}>ADD</button>
                    </center>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Add;