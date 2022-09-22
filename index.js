const menuItems = document.querySelectorAll('.primary-menu > ul > li'); //lấy li tất cả các cấp menu

const width = window.innerWidth;

if (menuItems.length > 0){
    menuItems.forEach(menuItem => {

        //console.log(menuItem);

        
        //Đưa mũi tên vào menu có cấp con
        if (menuItem.children[1]!==undefined){

            const subMenu = menuItem.children[1]; //Lấy tất các con liền sau. giống > trong css
            
            menuItem.classList.add('has-children');

            const angleIcon = document.createElement('i');
            angleIcon.classList.add('fa-solid', 'fa-angle-down', 'icon-down');

            menuItem.insertBefore(angleIcon, subMenu);

            //console.log(angleIcon);


            //Xử lý từ cấp 2
            
            const subMenuItems = subMenu.querySelectorAll('li');
            subMenuItems.forEach(subMenuItem => {
                if (subMenuItem.children[1]!==undefined){
                    subMenuItem.classList.add('has-children');

                    const angleIcon = document.createElement('i');
                    angleIcon.classList.add('fa-solid', 'fa-angle-right', 'icon-right');

                    subMenuItem.insertBefore(angleIcon, subMenuItem.children[1]);
                }
            })
        }


        //Xử lý khi click vào menu item
        menuItem.addEventListener('click', (e) => {
            const menuItemActive = document.querySelector('.primary-menu li.current');
            if (menuItemActive!==null){
                menuItemActive.classList.remove('current');
            }
            e.target.parentElement.classList.add('current');
        })
    });
}

if (width<=768){
    const allMenuItems = document.querySelectorAll('.primary-menu > ul li i');

    allMenuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            
            const subMenu = e.target.nextElementSibling;
            if (subMenu!==null){
                subMenu.classList.toggle('open');
                if (subMenu.classList.contains('open')){

                    if (menuItem.classList.contains('icon-down')){
                        menuItem.style.transform = 'rotate(0deg)';
                    }else{
                        menuItem.style.transform = 'rotate(90deg)';
                    }

                    menuItem.style.transition = 'transform 0.2s linear';
                    
                }else{

                    if (menuItem.classList.contains('icon-down')){
                        menuItem.style.transform = 'rotate(-90deg)';
                    }else{
                        menuItem.style.transform = 'rotate(0deg)';
                    }
                    
                }
                
            }
        })
    });
}
