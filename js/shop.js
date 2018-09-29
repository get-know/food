var count = 0;
+function(){
	let aRigLi = document.querySelectorAll('.l-right li'),
		aLeftLi = document.querySelectorAll('.l-left li a'),
		oShop = document.querySelector('.shop-desc'),
		oBtn = document.querySelector('.shop-img .btn'),
		oOrderList = document.querySelector('.order-list'),
		len1 = aLeftLi.length,
		len2 = aRigLi.length,
		index = 0;
		
	//左边li点击事件
	for(var i = 0;i < len1;i++){
		aLeftLi[i].index = i;
		aLeftLi[i].onclick = function(){
			aLeftLi[index].className = '';
			index = this.index;
			aLeftLi[index].className = 'current';
			
		}
	}
	
	//右边li点击事件
	for(var i = 0;i < len2;i++){
		aRigLi[i].onclick = function(){
			oShop.classList.add('on');	
			oOrderList.classList.add('on');	
//			add();
		}		
	}
	//关闭商品详情
	oBtn.onclick = function(){
		oShop.classList.remove('on');
		oOrderList.classList.remove('on');		
	}			
}()


//点击加减商品按钮
add();
function add(){	
	let aAdd = document.querySelectorAll('.change .add'),
		aRemove = document.querySelectorAll('.change .remove'),
		aChange = document.querySelectorAll('.change'),
		aNum = document.querySelectorAll('.change .num'),
		oIcon = document.querySelector('.s-icon'),
		oPay = document.querySelector('.s-pay'),
		oOption = document.querySelector('.option span'),
		oNum = document.querySelector('.s-icon .num'),
		len = aAdd.length,
		index = 0;	
		console.log(count);
	//加选点击事件	
	for(var i = 0;i < len;i++){
		aAdd[i].index = i;
		aAdd[i].onclick = function(e){
			index = this.index;			
			e.stopPropagation();
			oNum.classList.add('on');
			oNum.innerHTML++ ;
			if(oOption.innerHTML >= 10){
				oIcon.classList.add('current');
				oPay.classList.add('current');
				
			}else{
				oIcon.classList.remove('current');
				oPay.classList.remove('current');
			}
			aNum[index].innerHTML++;
			aRemove[index].style.display = 'block';
			oOption.className = 'price';
			
			
			sum(true);
		}			
	}
	
	//减选点击事件
	for(var i = 0;i < len;i++){
		aRemove[i].index = i;
		aRemove[i].onclick = function(e){		
			index = this.index;
//			
			oNum.innerHTML-- ;
			if(oOption.innerHTML <= 20){			
				oIcon.classList.remove('current');
				oPay.classList.remove('current');
			}
			
			
			if(aNum[index].innerHTML <= 1){
				aNum[index].innerHTML = '';
				aRemove[index].style.display = 'none';	
				//oNum.classList.remove('on');
			}else{
				aNum[index].innerHTML--;
				aRemove[index].style.display = 'block';
			}
			e.stopPropagation();
			sum(false);
		}
	}
	
	//计算价格

	function sum(bool){
		var sum = parseInt(oOption.innerHTML);
		
//		console.log(typeof sum);
		if(bool){
			sum += 10;
			if(oOption.innerHTML >= 10){
				oPay.innerHTML = '结算';
			}			
		}else{
			sum -= 10;
			if(oOption.innerHTML <= 20){
				oPay.innerHTML = '20元起送';
			}			
		}
		console.log(oNum.innerHTML);
		if(oOption.innerHTML >= 10){
			
		}
		oOption.innerHTML = sum;
		console.log(sum);
	
	}
	
	oPay.onclick = function(){
		if(oOption.innerHTML < 10){
			alert('请选择商品');
		}else if(oOption.innerHTML < 20){
			alert('满20起送');
		}else if(oOption.innerHTML >= 20){
			window.location.href = 'confirm-order.html';
		}
	}
}

	