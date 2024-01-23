import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  offer=[
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeExGjMXySRcNtoqG2wy1dfyosGrAnUo-uCQ&usqp=CAU",
    details:"Airpods",
    price:"1,700/-"
  },
{
  image:"https://5.imimg.com/data5/TC/OG/MY-9040536/image003.png",
    details:"Steel Food Warmer",
    price:"70,000/-"
},
{
  image:"https://static.toiimg.com/thumb/msid-78753073,width-400,resizemode-4/78753073.jpg",
    details:"Mobile",
    price:"12,000"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DHS-97HdEmEaL6KaCosiKiEIXeLUIvnHeQ&usqp=CAU",
    details:"Water Bottle",
    price:"1,000/-"
},
{
  image:"assets/kayal/jewellery-removebg-preview(1).png",
    details:"Jewellery set",
    price:"1,200/-"
},
{
  image:"https://5.imimg.com/data5/ANDROID/Default/2023/5/308229295/CK/AS/PC/93903904/product-jpeg-500x500.jpg",
    details:"Suti Material",
    price:"1,200/-"
}
]
card=[
  {
    image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/sari/s/d/y/free-vitara-firozi-villagius-unstitched-original-imagk3bupdunzghc.jpeg?q=90&crop=false",
    details:"Saree",
    price:"1,200/-" 
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPq0fhhFuipToAME547tpXqrp-QkH6PrROiQ&usqp=CAU",
    details:"Smart watch",
    price:"2,100/-"
  },
  {
    image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwgMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUDAgj/xABBEAABAwIDBAcFAwsEAwAAAAABAAIDBBEFBiEHEjFRE0FhcYGRoRQiMrHBYtHhFSMkQkNSU3JzkrKiwtLwJTNj/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAgMGAQf/xAA1EQACAQMCAwMKBwEBAQAAAAAAAQIDBBEFIRIxQVFhcQYTIjIzkaGxwdEUIzRCgeHwUvEV/9oADAMBAAIRAxEAPwC8UAQBAEAQBAEAQBAaVfidDh7N6tq4oB9t4B8li5xjzNtOhVqvEItkeqtoWBwG0Tqmot/CisD4usFold013ljT0S7nu0l4v7HPdtNpbno8LqSPtysB9CVrd7HsJS8nqvWa+P8ARmPaZRE2lw2raObXsd9Qn42PYzyXk/WXKa+J1KPPmBVFmvqJadx/jREDzFx6rbG6pS6kSpo93T/bnwO/R1tNWsElJURzMPWxwK3qSfIrp0503iSwbV16YBAEAQBAEAQBAEAQBAEAQBAEAQGCQOKA5WOY/h2CRF9bN75HuxM1e7uC1zqxgvSJNtZ1rmWKaK1x7aFiFZvRULvYoT/D1eR/N1eHmoNS6nLaOx01rolGl6VX0n8CHz1sjyZJXkk/E97iSe8lRnl8y3jwxWIpLwMRipnF4YJ5R/8AONzvkF7wN9DXKvCPNpG0zDMWeLtwysI/ou+5ZKlJ9DV+Nor9695iTDsVibvSYbWAf0HfcjpSXQ9V5Rf717zVkdNB/wC9kkP9Vhb81i4NdDbGtGXqvPgelJiM9PIJYJpI3jUPieWnzC8TlH1T2ap1Fiaz4k4wDaNUw7sWKt9pjGhkbYSfcVKp3jW0ylutCpzzKg8PsLIwnFaLFabp6GdsrOscC3vHUp8JxmsxObrUKlCXDUWGbt1kaTKAIAgCAIAgCAIAgCAIAgME2F0BDc552gwhr6Sgc2StGjncWxfeexRa9yobR5lzp2kyuMVKm0PmVWXYnjteWxsqKyqlN7NG849p5Dv0VfidVnUOpRtKe2IomuB7MJJGiTGqrouvoKc3Pi46eQUyFn/0yguddy8UY/y/sTTDMnYBhhD6XDYDKP2st5H+br28FKjShHkioq39zV9af0+R2mRMjAEbWtA6miwWxbER5fM+7IeC3aUPTzkgjlFpGNeOTmgrzCfM9Ta5HAxLI2XsQ3i7D2QSHXpKYmI356aHxBWuVCnLoTaOpXVLlN479/mQjHtmddSB02DTe2MH7J9mSeB4H0UWpaP9pc2uuRbxVWH29CLYdiWI4FX7zHy008Zs9jmkEdjmniFEUp0pbFzUp0LyniWJZ/3Mt/KWa6XHoRG4tirGi7or6O7W8wrOjXjUXechf6dUtJdse0kgN1vK4ygCAIAgCAIAgCAIAgCAhef82HB6Y0VE4e2yjVw/Zt+89XmotxW4FwrmXOk6b+Jl5yp6i+JX2V8s12Z6t8xc6Kja49LUHXXrDb8T28AolGhKq8svdQ1CnaR4Ir0uiLiwPA8PwSjFPh8Ajbxe86veebj1lWcIKCwjj7i4qXE+OozpWWRpMoAgCAIAgCAwRdAcPMuV8NzBBu1ce5UNH5uojsHs+8dhWupSjUW5Ltb2rbPMHt1XQqLFsKxPKWKx9K4tN96CojuGvty5Hs+arJ05UZbHYWt3Rv6Ti14rs/rvLYybmOPH6AFzmiriA6Zg6/tDsKsKFZVY95ymo2MrSrj9r5EiW8rwgCAIAgCAIAgCAIDm4/iseDYXNWyWcWCzG3+Jx4BYVJqEcskWtvK4rKnHqU5gmGVeccwvEz3dGT0tTN+60ngO08B2DsVZSpyrVMs7C9uKen26jDwS/wB8S68Po6ehpYqWkibHBE0NYxotYK1UVFYRxM5yqSc5PLZtL0xCAIAgCAIAgCAIDFggObjuEUuNYfLRVjLxv4OHFjuojtCxnBTjws3W9edvUVSD3KepX1+S8zdHLq+A2JGjZoz1jv5dRVV6VCpudpLzWpWm3/jLsoKuKupIaqncHRTMD2nsKtoy4lk4ipTlTm4S5o2F6YBAEAQBAEAQBAYugKo2p4u6rxOPDIbujp/iaNd6Q9XqB4lV13NylwI6vQ7dU6MrifX5E4yVgbcBwSGB7QKmQdJUOGt3kcL9nDwUyjS83BIodQu3dV3PpyXgSBbSEEAQBAEAQBAEAQBAEAQEM2k5fOKYR7bTR3q6MFwsNXx/rN+o7R2qNc0uOOepb6PeOhX4G/Rlt/PRnP2U4x0sE2FSuuYx0sP8p4+uvitdnUyuB9CVr1qozVxHk9n4lh3uppzwQBAEAQBAEAQGvXVLaOknqZfghjdI7uAuvJPCbMoQc5qK6lR5KpH49nIVVWN8RudVSg87+6PM+gVbQj5ys5M7DVaitbJUobdPv/u8uMCyszjTKAIAgCAIAgCAIAgCAIAgPl7Q5ha4AgixB60BTMTDlbPe5qIoamw7Yn6j0cR3tVV7K42Ozk/x2m564+K5lzNIIuOtWpxh9IAgCAIAgCAICL7Rqs0uV6hoNjM5sfgTc/JR7mXDSZZ6PSVS8in03OPsloRHQV9aWkOlmbC082sH/JzvJa7OOItkzX6rlVjDsWff/WCwFMKAIAgCAIAgCAIAgCAIAgCAweCAq3axQ7mKUda0EdNCY3Ec2G49CVX3sd00dT5PVcxlTfb81v8AQn+WKv27L9BU9b4G73eND8lNpy4opnPXdPzVecOxnUWZHCAIAgCAIAgIFtYk/Q8OgB+OckjmAPxUO9foxXeX/k/H86cuxHX2eRCPKdERp0u9L/c4lbbdflIg6vPivJ923uRJlvK4IAgCAIAgCAIAgCAIAgCAFAQjapA12EUMxFzHVbt/5muCiXfqZLvQZNXEkuq+qNzZjKX5TgYTcxSyN/1F3+5ZWnskatbio3ssdcfIlaklSEAQBAEAQBAV1tZdafCeQMh9WKDe8kdJ5Pc6v8fUkuRbDKOE24eztUmh7NFRqf6yp4s3MUx3DMMa81lZGxzBrGDd/kNetZTqRgsyZqoWle4ko045yRSq2mUbHEU+G1ckYPxOe1hPcNfWyiO/insi7h5N1mszml72S/A8Wpcaw9lZRPcY3Eghws5pHEEKXTqRqRyikurWpa1HSqczoLMjhAEAQBAEAQBAcXM2YaTL9M2aq33vfcRRM4vI+Q4a9q1Va0aSyybZWNW8qcMOS5vs/wB2Eeo9pVBI7dq6GqgH77SJAO8Cx8go8b6L5rBaVfJyvFZhNS+H9Esw/FaHEQDR1cMptvbrX6gdoUtTjJbFHVoVaTxUjgj21EgZajtbe9sit5/ddR7v2ZZ6H+r/AIZ8bKjfLcvL2p1v7GJZ+zMte/V/wiZqUUoQBAEAQBAEBXe19hNPQPaNW9J8gfooN6vRR0fk68VJrwOXhuczhuRcPipLPrnvkhA/htafi79Rbv7Fj+I81RXazZ/8p3V/UctorD9/Qh1TU1FTXskqjvSOY8knjqWlQ5zlJNs6KlQp0ZKMOWH9DJutOSU+RNdlOI9DiVThzz7tRGJmD7TdD6W8lYWM8ScTmPKGhxU41uzb3lpN4BWRyZlAEAQBAEAQHy5BkpzaLiHt+Zp4g4mOka2BoHDe+Jx9QPBVF5PiqeB2+h0PNWql1k8/YjoKhl4feFYlV4dVPqKKzXxyFxcB2AaqRGrKnhohVrSlcwcanUk+dM0sxvKOHWaI6mSrIljB4FrTr3G4UutWVSin1KPT9PlaX7i+SWxL9l8fR5ZN/wBaoefkPot9p7JFZrjzePwRLlJKgIAgCAIAgCAgW1Vw9jptL7m8SOw2ChXnqo6HyfX5kmV5g1DCyEVDvee9xcAeA/7ZQYpNZZ0uWsxR44m0ithmA90u3T4tP1AWMlzNkXhR8TFlqwSTay/W/k3MGF1d7NjqA2Q/YJ3Xehv4LfQlwzTIF/S87bzp9qfvW6L8HBXZ87MoAgCAIAgCA8auVtPTyTPIDY2FxvyAXjeFk9jFyaiup+fJah1bUS1Tzd08rpD43VDN8TyfSqMFTioLktj74EdqwwSD1wRp3ZJXcJCSBzBJW5cyG3mKx3nlitHBDJDVMvu7xuy+nD8F41hbHsW5SWehbuzr3cvhh0cH3I7wFa23s8HGax+pz3EpUgqggCAIAgCAICvdpt3vdFzpbjvu77lCunvg6TQ1iDl3/QgdDII6UMcdWOIVetlg6VrLyeGIP6SB5B+Cz/Ir1PcT2jk+QQQFqJHU1qq4DiOLXA379FlE1VORf2Xq327BKGq3rmSFpJ7baq7pS4oJnzu7peauJ0+xs6S2EcIAgCAIAgI1tFrPY8o1xBs6ZohFvtGx9LrRcyxTfeWWk0+O8g3yW/uKXpxZjAeO581TM7umtkfdQ8RQvfx3QSiWTKUuGLZtUz20zGREmzGNb6LPO5pjDEUj5xEmdsMbLEauKMeq8lrZAN6WpaPhaWjxsrS2fos4/WVipH+SWKSUwQBAEAQBAEBBNpLN2WklPwvY+M+hHzKg3a3R0WhSypx8GVfM/o3lvDeAP0PyUCR1FJ5PiN3SOMZ/XaW+YWK5mco5WBTP34GE8bI+bEJcUUxN728399pCIT5FsbKKz2nK4iPGmmcw35EBw/yVpZyzTwcVrlLgueL/AKS+xNlLKcIAgCAIDB0CArnbDWfoVDQNdYyyF5HMDT6qDevCSOh0ClxSnN+HvK6jOrj22VazrUfM533Rxji+Ro9b/RZR5mNTdYMPmJme4HTeXhkuR70Tt6XXXUD1v8gskaaj3wW9s8Z/4ieU678xA7gB+KtLVeg2cfrcs3Cj2IlSklOEAQBAEAQBARHaVBv4CJxqYJWu8Dofmo12s0y40SfDdcH/AEsFOVb7ytHK489VWSOvg8M82ktcCOorE3N7GYXWklZyeSO46/VJdDCm8Zj3/Pc9JHWaD+6V4Ztk/wBkNRuVeJUhPxsZI3wJB/yCnWMvSa8Dm/KGn+XTn2Nr34+zLRVicsEAQBAEBh3BAU5tSrOnzR0IPu0sDWnscfePoWqrvHmrg7PQqXBacb/c39vuRNh3W2UMuk9jzc/9JZ9hjnfQfVZx9VmuTzNLs3+h8WXmDYmbNBLbXk4n6LLoaM5bZeuT6c0uW6GNwIe6PpHA83Eu+qt6KxBHDajV85dTku3Hu2OytpCCAIAgCAIAgOfjlH+UcJrKO2ssTmtPJ1tD52WM48UWjdbVfM141Oxo/P2IsdEWuc0gjRw6wR1fNVDWNmd3xdg3OSxwbuM8Xfm6pv2m2Ph+CNeieJ4n4nodQ4HhZYJG1kp2Y1JhzVTtJ92eF7O82v8ARSLR4qlTrUOOyb7Gi6lbHFBAEAQBAYd8JsgKDzhOanNGKSE33qosHc0Bvyaqas+KrJnf2EOCzpx7vnucrevotWCbk8offdK7m6w7h+JKzxsjQpZk334PSRobE5x5IkeynsbuX6F1dV0tK0azSiMd19fr5LbCHE0iNWreapSm+i/3xP0FCwRxtY0Wa0ABW2MHBNtttnogCAIAgCAIAgMEICsc8ZJrJKiorsJi6dkji90Dfja7rsOsHXRRKtu28xL6y1SKgqdTmupB/Y6ujgh9tpZ6cvB3OmYWF4HXYqJKDXMu6deE8qLzjsNLEGENEjRq073h1+l14kbXPr2HzfXQ3WrBKydvIriM44WG6npibdm4662UF+YiDqLX4Oqn2fVF9q4OFCAIAgCAweCA/OOJvc7FKvfvvCZ97894qkl6zPodJrzcUuxGtJIGMc89Wo714lkzlPCbPeji3IgDq63vHt61twR1LCwbbsNxCtga+hoaioiMoYXwxlwv1A24dSzjTk1sR6tzTi+GUknzLKyHk6owuaOuxTdbMyMiKEG5YSLEuI0vblzKl0aPC8soNQ1FVoulT5E7At1qSVBlAEAQBAEAQBAEBiwQGpiOGUOJQdDX00U8fJ4vbu5LxpPmZwqTpvMXghuLbM6Cfedh1XPTEnSN/wCcZ66+pWiVvF8izpavWjtNZOfFsnY1jG/ll5sPe/MA+Wq1OzTeckmOuyjHHB8ST5YyXhmXpTUQGaeqIt00xFwOsAAAD5rfToRp7rmV95qVa6XDLZdiJOtxACAIAgCAweCAh+Ydn2FYzVy1jZZ6Sql1e6IgscbWuWkdnVZR6ltCbz1LS11avbwUMJpdv3OBJsoDmDdxclzXAgGCwPfqtas0upKnrspYXBt4/wBHawrZxhNNuurZZ61w/VcdxnkNT4krbG3iiHW1WvU9XZEvpaOmo4Ww0sLIYm8GMFgFuSS5FdKTm8y3PYADgvTwygCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAxYckBlALIAgCAIAgCAIAgP/9k=",
    details:"Headphones",
    price:"2,700/-"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_w64v27vAg_0kY2CyIztMz4uA4v-fyiC1Q&usqp=CAU",
    details:"Laptop",
    price:"70,000/-"
  },
  {
    image:"https://rukminim2.flixcart.com/image/850/1000/jbgtnrk0/shoe/u/4/g/light-weight-and-fashionable-sports-casual-8-hd-black-original-imafy74whszndygb.jpeg?q=90&crop=false",
    details:"Men's Shoes",
    price:"2,000/-"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9b6nDBkqbwLOjlRh95TPxW8WahSA6d0wRTA&usqp=CAU",
    details:"Wet Grinder",
    price:"7,000/-"
  }
]
}
