// 数组数据
  let navData = [
    { id: 1, text: '一级菜单A', parentId: null },
    { id: 2, text: '一级菜单B', parentId: null },
    { id: 3, text: '一级菜单C', parentId: null },
    { id: 4, text: '二级菜单AA', parentId: 1 },
    { id: 5, text: '二级菜单AB', parentId: 1 },
    { id: 6, text: '二级菜单AC', parentId: 1 },
    { id: 7, text: '二级菜单BA', parentId: 2 },
    { id: 8, text: '二级菜单BB', parentId: 2 },
    { id: 9, text: '二级菜单BC', parentId: 2 },
    { id: 10, text: '二级菜单CA', parentId: 3 },
    { id: 11, text: '二级菜单CB', parentId: 3 },
    { id: 12, text: '二级菜单CC', parentId: 3 },
    { id: 13, text: '三级菜单AAA', parentId: 4 },
    { id: 14, text: '三级菜单BAA', parentId: 7 },
    { id: 15, text: '三级菜单CAA', parentId: 10 }
  ];
// 把数组修改为多级菜单格式
  function makeTree(arr,pId){
    let temp = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i].parentId === pId){
        temp.push(arr[i]);
        arr[i].children = makeTree(arr,arr[i].id); 
      }
    }
    return temp;
  }  
  let tree =  makeTree(navData,null);//多级菜单格式数据数组
  console.log(tree);

// 将数据动态生成到页面
  let nav = document.querySelector('.nav');
  function make(arr,parentNode){
      let ul1 = document.createElement('ul');
      for(let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.innerHTML = `<a href="javascript:;" class = "item">${arr[i].text}</a>`;
    ul1.appendChild(li);
    if(arr[i].children.length !== 0){
        make(arr[i].children,li)
    }
      }
      parentNode.appendChild(ul1);
  }
  make(tree,nav);


  
  Array.prototype.forEach.call(nav.children,e => e.classList.remove('hide'));
  nav.addEventListener('click',function(e){
    if(e.target.classList.contains('item')){
      e.target.nextElementSibling.classList.toggle('hide');
    }
  })


