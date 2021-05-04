import { useState } from 'react'
import $ from 'jquery'

const View = props =>{
    let [setView,setAdd,setViewAll] = props.active;
    setView('active');
    setAdd('');
    setViewAll('');

    let [searchName, setSearchName] = useState('');
    let [dataRetrieved, setDataRetrieved] = useState({name:'',age:''});
    let [disp, setDisp] = useState('none');

    const view = ()=>{
        $.ajax({
            type: 'post',
            url:'http://localhost/your_folder_name/view.php', // enter your folder name here
            data:{type:'view_one',name:searchName},
            success: res=>{
                let [name,age] = res.split(',');
                setDataRetrieved({name:name,age:age});
                setDisp('block');
            }
        })
    }


    return(
    <>
        <div className='container'>
            <div className='row' style={{height:'80vh'}}>
                <div className='col-md-6 mx-auto my-auto'>
                    <div className='card-body shadow'>
                    <center>
                    <h5 className='display-4'>View</h5>
                    </center>
                    <input className='form-control' type='text' value={searchName} onChange={e=>setSearchName(e.target.value)} placeholder='Item name'></input>
                    <br/>
                    <center>
                    <button className='btn btn-dark' onClick={view}>View</button>
                    </center>
                    <div id='retireved' style={{display:disp}}>
                    <hr/>
                    <center>
                    <p className='display-4'>Data Retrieved</p>
                    <div className='col display-4 text-muted' style={{fontSize:'1.5rem'}}>{`Name: ${dataRetrieved.name}`}</div>
                    <div className='col display-4 text-muted' style={{fontSize:'1.5rem'}}>{`Age: ${dataRetrieved.age}`}</div>
                    </center>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default View;