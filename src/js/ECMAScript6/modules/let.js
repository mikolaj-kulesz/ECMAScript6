class Let {
    constructor() {
        this.firstExample();
        this.secoundExample();
        this.thirdExample();
    }

    firstExample() {
        var x = 1;
        if(x){
            var x = 0;
        }
        console.log(x);
    }

    secoundExample() {
        var x = 1;
        if(x){
            let x = 0;
        }
        console.log(x);
    }

    thirdExample() {

        /*$('.let-example ul li').on('click', function(e){
            var thisEL = $(e.target);
            var group = $('.let-example ul li')
            console.log(thisEL.index()+1);
        });*/

        //var or let - check this:
        for(let i=0; i<$('.let-example ul li').length; i++){
            $('.let-example ul li').eq(i).on('click', function () {
                console.log('you clicked on element #'+i);
            })
        }


    }
}