import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {

    var event_time= req.query.sid ;
    var event_id= req.query["ep\.event_id"] ;
    var event_name= "PageView" ;
    var event_source_url = req.query.dl ;
    var fbp = req.query["ep\.x-fb-ck-fbp"] ;
    /*

    /g/collect?v=2
&tid=G-1234
&gtm=45je35h0
&_p=1623183256
&_dbg=1
&cid=344234077.1667304715
&ul=en-us
&sr=1280x720
&_fplc=0
&uaa=x86
&uab=64
&uafvl=Google%2520Chrome%3B113.0.5672.93%7CChromium%3B113.0.5672.93%7CNot-A.Brand%3B24.0.0.0
&uamb=0
&uam=&
uap=Windows
&uapv=15.0.0
&uaw=0
&sst.uc=IN
&_s=1
&sid=1684605866
&sct=5
&seg=1
&dl=https%3A%2F%2Fkitchenmate.com.au%2F%3Fgtm_debug%3D1684605862520&dr=https%3A%2F%2Ftagassistant.google.com%2F&dt=Kitchenmate%20-%20Lower%20your%20food%20costs%20by%2032%25
&en=page_view
&ep.event_id=1667907291979_16846067407691
&ep.x-fb-ck-fbp=fb.2.1684605866872.1739070923&richsstsse

    */
    
    var url = "https://graph.facebook.com/v11.0/398837755682647/events?access_token=EAAGpouBqZCrQBAHi4rIdSQDluRZCqnjpf5R6WgYqL1qDsLLcqNzIzQ68EG2ZAypZCLYSxlrwDHZCjcGgZB6HXzxDnVZA8MBKbBZCSguSA9aEXSgqlIkZA7G0oBAKei2WKZA7Npmq9ZAkfTtxMvHHdIlMoTxgypNIssmOzJPQpJUfaWqzSMuKpQQ5GgPTB9CHfqo858ZD";

    var data = {"data":[{"event_name":event_name,"event_time":event_time,"event_id":event_id,"event_source_url":event_source_url,"action_source":"website","user_data":{"em":null,"ph":null,"fbp":fbp},"custom_data":{"contents":null}}],"partner_agent":"gtmss-1.0.0-0.0.4","test_event_code":"TEST3049"};


  fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then((response) => response.json())
    .then((data) => console.log(data));

    res.status(200).json({  });
}


export default connectDb(handler);
