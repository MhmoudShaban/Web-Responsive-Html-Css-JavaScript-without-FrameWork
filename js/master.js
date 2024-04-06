// the Div landing
let mylandImages =document.querySelector('.landing-page');
// all images
let my_images=['../images/landing1.jpg','../images/landing2.jpg','../images/landing3.jpg','../images/landing4.jpg'];


setInterval(() => {
    let myRandom = Math.floor(Math.random()*my_images.length);
    mylandImages.style.backgroundImage ='url(images/'+my_images[myRandom]+')';
},3000);

// setTimeout(a,10000)

// Start Toggle Menu

let buttonToggle = document.querySelector('.toggle');
console.log(buttonToggle);
let linkToggle = document.querySelector('.links')
console.log(linkToggle);
buttonToggle.onclick =function(){
    linkToggle.classList.toggle('openmenu')

}
// end Toggle Menu
// Start products progress
let products = document.querySelector('.our-products');
let spans = document.querySelectorAll('.progress span');
function productsPross(){
    if(window.scrollY>= products.offsetTop-200){
        spans.forEach((span)=>{
            span.style.width =span.dataset.width;
        })
    }
}
window.onscroll = function(){
    productsPross();
    CountSection();
}
// end products progress
// start gallary  
let listitems =document.querySelectorAll('.ullsits ul li'),
    listImages = document.querySelectorAll(".ourphotos img");

listitems.forEach((li)=>{
    li.addEventListener('click',removeandAdd);
    li.addEventListener('click',removeImg);
})
function removeandAdd(){
    listitems.forEach((li)=>{
        li.classList.remove('active');
        this.classList.add('active')
    })
}
function removeImg(){
    listImages.forEach((img)=>{
        img.style.display='none'
    })
    document.querySelectorAll(this.dataset.img).forEach((el)=>{
        el.style.display='block'
    })
}
// end gallary
// Start ourteam 
let ourteam =document.getElementById('our-team');
var con1 =document.getElementById('control1');
var con2 =document.getElementById('control2');
var con3 =document.getElementById('control3');

    con1.onclick =function(){
        ourteam.style.transform="translateX(870px)";
        con1.classList.add('active');
        con2.classList.remove('active')
        con3.classList.remove('active')
    };
    con2.onclick =function(){
        ourteam.style.transform="translate(0)";
        con2.classList.add('active');
        con1.classList.remove('active')
        con3.classList.remove('active')
    };
    con3.onclick =function(){
        ourteam.style.transform="translate(-870px)";
        con3.classList.add('active');
        con1.classList.remove('active')
        con2.classList.remove('active')
    };
    if(window.innerWidth<=768){
        con1.onclick =function(){
            ourteam.style.transform="translateX(500px)";
            con1.classList.add('active');
            con2.classList.remove('active')
            con3.classList.remove('active')
        };
        con2.onclick =function(){
            ourteam.style.transform="translate(0)";
            con2.classList.add('active');
            con1.classList.remove('active')
            con3.classList.remove('active')
        };
        con3.onclick =function(){
            ourteam.style.transform="translate(-500px)";
            con3.classList.add('active');
            con1.classList.remove('active')
            con2.classList.remove('active')
        };
    }
// End ourteam  
// Start Our states

let numCount = document.querySelectorAll(".numbers div .num")
let DivCouner = document.querySelector('.our-states')
let started = false;

function increaseNum(el){
    let mygoal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if(el.textContent == mygoal){
            clearInterval(counter);
        }
    },1000 / mygoal);
}


function CountSection(){
    if(window.scrollY >=DivCouner.offsetTop -50){     
        if(!started){
            numCount.forEach((el)=>{
                increaseNum(el);
            })
        }
        started = true;
    }
}
// End Our states
// Start reach to any menubar element by click on it
let abu =document.getElementById('about');
let Features =document.getElementById('Features');
let product =document.getElementById('product');
let contactus =document.getElementById('register');

abu.onclick =function(){
    window.scrollTo({
        top:800,
        behavior:"smooth"
    });
    //
    
};
Features.onclick =function(){
    window.scrollTo({
        top:1450,
        behavior:"smooth"
    })
};
product.onclick =function(){
    window.scrollTo({
        top:2050,
        behavior:"smooth"
    })
};
contactus.onclick =function(){
    window.scrollTo({
        top:7200,
        behavior:"smooth"
    })
};

if(window.innerWidth<=786){
    abu.onclick =function(){
        window.scrollTo({
            top:800,
            behavior:"smooth"
        });
        //
        
    };
    Features.onclick =function(){
        window.scrollTo({
            top:1450,
            behavior:"smooth"
        })
    };
    product.onclick =function(){
        window.scrollTo({
            top:2890,
            behavior:"smooth"
        })
    };
    contactus.onclick =function(){
        window.scrollTo({
            top:10000,
            behavior:"smooth"
        })
    };
}

// end reach to any menubar element by click on it
// Start to button to top
let toTop =document.getElementById('toTop');
toTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})
