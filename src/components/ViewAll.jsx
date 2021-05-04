import { useEffect, useState } from 'react'
import $ from 'jquery'

const ViewAll = props =>{
    let [setViewAll,setView,setAdd] = props.active;
    setView('');
    setAdd('');
    setViewAll('active');

    let [data,setData] = useState([]);

    useEffect(()=>{
        $.ajax({
            type:'POST',
            url:'http://localhost/your_folder_name/view.php', // enter your folder name here
            data:{type:'view_all'},
            success: res=>{
                res = res.split('//');
                res.pop();
                let d = []
                for(let i=0;i<res.length;i++)
                {
                    d.push([res[i].split(',')])
                    //d.push([res[i][0],res[i][1]])
                }
                setData(d);
            }
        })
    },[])

    return(<>
        <div className='container'>
            <div className='row' style={{height:'80vh'}}>
                <div className='col-md-6 mx-auto my-auto'>
                    <div className='card-body shadow'>
                    <center>
                    <h5 className='display-4'>Data</h5>
                    </center>
                    <div id='retireved'>
                    <center>
                    <p className='display-4'>Data Retrieved</p>
                    <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(function(val){
                        return(
                            <tr>
                            <td>{val[0][0]}</td>
                            <td>{val[0][1]}</td>
                            </tr>
                            );
                    })}
                    </tbody>
                </table>

                    </center>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default ViewAll;