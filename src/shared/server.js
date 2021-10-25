import axios from "axios";

async function server(data){
    const weatherDomain ='https://api.openweathermap.org/data/2.5/weather?';
    const apiKey = '20ff1268a191cf3b1891801ac90a5e87';
    let request  = '';
    if(data.length>1){
        request=`${weatherDomain}lat=${data[1]}&lon=${data[0]}&appid=${apiKey}`
    }else{
        request=`${weatherDomain}q=${data[0]}&appid=${apiKey}`
    }
    const response = await axios(request);
    // const response = await axios("https://json.extendsclass.com/bin/edf698cbf481");

    return response;
}
export default server;