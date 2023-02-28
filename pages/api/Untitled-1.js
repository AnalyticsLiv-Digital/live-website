<script>
    var obj;
    for(var i=0; i<document.querySelectorAll('script[type="application/ld+json"]').length; i++){
        if(JSON.parse(document.querySelectorAll('script[type="application/ld+json"]')[i].innerHTML).itemListElement !== undefined){
         obj = JSON.parse(document.querySelectorAll('script[type="application/ld+json"]')[i].innerHTML).itemListElement;
           
          if(obj.length == 3 ){
           
            if(obj[1].name !== 'Articles'){
             
              if(obj[1].name == 'Health Insurance' || obj[1].name == 'Two-wheeler Insurance'){
            dataLayer.push({
              'event' : 'page_category',
              'parentCategory':obj[1].name.toLowerCase(),
              'subCategory': obj[2].name.toLowerCase(),
              'title': 'N/A'
            });
              }else{
                dataLayer.push({
              'event' : 'page_category',
              'parentCategory':obj[1].name.toLowerCase(),
              'subCategory': 'N/A',
              'title': obj[2].name.toLowerCase()
            });
               
              }
             
            }else if(document.URL.includes('/holidays/')){
              dataLayer.push({
              'event' : 'page_category',
              'parentCategory':'holidays',
              'subCategory': 'N/A',
              'title': obj[2].name.toLowerCase()
            });
            }
           
          }else if(obj.length == 4){
            if(obj[2].name.includes('Article')){
             
              dataLayer.push({
              'event' : 'page_category',
              'parentCategory':obj[1].name.toLowerCase(),
              'subCategory': 'N/A',
              'title': obj[3].name.toLowerCase()
            });
             
            }else{
             
              dataLayer.push({
              'event' : 'page_category',
              'parentCategory':obj[1].name.toLowerCase(),
              'subCategory': obj[2].name.toLowerCase(),
              'title': obj[3].name.toLowerCase()
            });
             
            }
                       
          }else if(obj.length == 5){
            dataLayer.push({
              'event' : 'page_category',
              'parentCategory':obj[1].name.toLowerCase(),
              'subCategory': obj[2].name.toLowerCase(),
              'title': obj[4].name.toLowerCase()    
            });          
          }else if(obj.length == 2){
            dataLayer.push({
              'event' : 'page_category',
              'parentCategory':obj[1].name.toLowerCase(),
              'subCategory': 'N/A',
              'title': 'N/A'
            });          
          }
         break;
        }
    }

</script>
