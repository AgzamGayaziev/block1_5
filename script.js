/*let brandNavigation = document.querySelector('.brand__navigation');
let brandNavigationList = brandNavigation.querySelector('.services__list')
let buttonShowAll = brandNavigation.querySelector('.show-all');

buttonShowAll.addEventListener('click', function (evt) {

   let action ;
   let checkClassOpen = brandNavigationList.classList.contains('services__list--open');
    let checkClassClose = brandNavigationList.classList.contains('services__list--cover-up');
    console.log(checkClassOpen);
   if (!checkClassOpen) {
       if (checkClassClose){
           brandNavigationList.classList.remove('services__list--cover-up');
       }
       action = brandNavigationList.classList.add('services__list--open');
   } else {
       brandNavigationList.classList.remove('services__list--open');
       action = brandNavigationList.classList.add('services__list--cover-up');
   }

       //action = brandNavigationList.classList.add('services__list--cover-up');

        //action = brandNavigationList.classList.add('services__list--open');

  return action;
})

*/