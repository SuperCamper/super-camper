body{
    margin:0;
    font-family:'Khmer OS Battambang',sans-serif;
    background:#f3f3f3;
}

.container{
    display:flex;
    gap:20px;
    padding:20px;
}

.sidebar{
    width:320px;
    background:white;
    padding:20px;
    border-radius:12px;
    box-shadow:0 0 10px rgba(0,0,0,.1);
}

.sidebar input,
.sidebar textarea,
.sidebar select,
.sidebar button{
    width:100%;
    margin-top:8px;
    margin-bottom:15px;
    padding:10px;
    box-sizing:border-box;
}

.preview-wrapper{
    flex:1;
    display:flex;
    justify-content:center;
}

#certificate{
    width:800px;
    height:1131px;
    position:relative;
    background-size:cover;
    background-position:center;
}

.logo-preview{
    position:absolute;
    top:35px;
    left:50%;
    transform:translateX(-50%);
    width:120px;
    height:120px;
    object-fit:contain;
}

.photo-preview{
    position:absolute;
    top:390px;
    left:50%;
    transform:translateX(-50%);
    width:140px;
    height:180px;
    object-fit:cover;
    border-radius:10px;
    border:4px solid white;
}

.name-preview{
    position:absolute;
    top:300px;
    width:100%;
    text-align:center;
    font-size:52px;
    color:white;
    font-weight:bold;
}

.group-preview{
    position:absolute;
    top:650px;
    width:100%;
    text-align:center;
    font-size:50px;
    color:white;
    font-weight:bold;
}

.reason-preview{
    position:absolute;
    top:760px;
    width:80%;
    left:10%;
    text-align:center;
    font-size:28px;
    color:white;
    line-height:1.6;
}
