var mobiles=[
    {name:"asusmaxprom2",brand:"asus",nw:"4g",prize:14999,Image:"https://accounts.google.com/RotateCookiesPage?og_pid=1&amp;rot=3&amp;origin=https%3A%2F%2Fwww.google.com"},
{name:"redme10",brand:"redme",nw:"4g",prize:24999,Image:"https://accounts.google.com/RotateCookiesPage?og_pid=1&amp;rot=3&amp;origin=https%3A%2F%2Fwww.google.com"},
{name:"realme22",brand:"realme",nw:"4g",prize:34999,Image:"https://accounts.google.com/RotateCookiesPage?og_pid=1&amp;rot=3&amp;origin=https%3A%2F%2Fwww.google.com"},
{name:"samsunga12",brand:"samsung",nw:"4g",prize:24999,Image:"https://accounts.google.com/RotateCookiesPage?og_pid=1&amp;rot=3&amp;origin=https%3A%2F%2Fwww.google.com"},
{name:"iphone11",brand:"iphone",nw:"5g",prize:114999,Image:"https://accounts.google.com/RotateCookiesPage?og_pid=1&amp;rot=3&amp;origin=https%3A%2F%2Fwww.google.com"},
{name:"motoedge",brand:"moto",nw:"5g",prize:22999,Image:"https://accounts.google.com/RotateCookiesPage?og_pid=1&amp;rot=3&amp;origin=https%3A%2F%2Fwww.google.com"}
]

var html_data=``;
mobiles.forEach(mobile=>{
html_data+=`
<tr>
<td>${mobile.name}</td>
<td>${mobile.brand}</td>
<td>${mobile.nw}</td>
<td>${mobile.prize}</td>

</tr>

`
})

console.log(html_data);
result.innerHTML=html_data