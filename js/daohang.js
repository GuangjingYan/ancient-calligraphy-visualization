//点击目录触发事件
	var pictitle = document.getElementsByClassName("pictitle")[0];
	var src1 = "img/圆.png";
	var src2 = "";
	var titleid = 1;
	function changecircle(){
		document.getElementById("circle1").setAttribute("src", src1);
		document.getElementById("circle2").setAttribute("src", src2);
	}
	function judgeid(id){
		console.log(id);
		if(id=="1"||id=="22"||id=="10"||id=="19") {
			titleid = titleid + ".1";
			//console.log(id);
		}
		if(id=="3")
		{
			titleid = titleid + ".2";
			//console.log(id);
		}
	}
	/*
	function num(n){
		console.log("got from python" + n);
	}*/
	/*
	async function judgepic(src){
		let check = await eel.checkfile(src)();
		console.log(check);
		if(check == 0)
		{
			console.log("路径不存在");
			src2 = "img/圆.png";
			console.log(src2);
		}
		changecircle();
	}
	*/

		document.getElementById("catalogue_1").onclick =  function () {
			pictitle.src = "img/pictitle/1.png";
			pictitle.id = "1";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片1.1.png")
			document.getElementById("datasetpic2").setAttribute("src", "img/newdataset/图片1.2.png")
			document.getElementById("datasetpic2").style.display = ""
			}
		document.getElementById("catalogue_2").onclick =  function () {
			pictitle.src = "img/pictitle/2.png";
			pictitle.id = "2";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片2.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_3").onclick =  function () {
			pictitle.src = "img/pictitle/3.png";
			pictitle.id = "3";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片3.1.png")
			document.getElementById("datasetpic2").setAttribute("src", "img/newdataset/图片3.2.png")
			document.getElementById("datasetpic2").style.display = ""
			}
		document.getElementById("catalogue_4").onclick =  function () {
			pictitle.src = "img/pictitle/4.png";
			pictitle.id = "4";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片4.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_5").onclick =  function () {
			pictitle.src = "img/pictitle/5.png";
			pictitle.id = "5";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片5.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_6").onclick =  function () {
			pictitle.src = "img/pictitle/6.png";
			pictitle.id = "6";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片6.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_7").onclick =  function () {
			pictitle.src = "img/pictitle/7.png";
			pictitle.id = "7";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片7.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_8").onclick =  function () {
			pictitle.src = "img/pictitle/8.png";
			pictitle.id = "8";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片8.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_9").onclick =  function () {
			pictitle.src = "img/pictitle/9.png";
			pictitle.id = "9";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片9.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_10").onclick =  function () {
			pictitle.src = "img/pictitle/10.png";
			pictitle.id = "10";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片10.1.png")
			document.getElementById("datasetpic2").setAttribute("src", "img/newdataset/图片10.2.png")
			document.getElementById("datasetpic2").style.display = ""
			}
		document.getElementById("catalogue_11").onclick =  function () {
			pictitle.src = "img/pictitle/11.png";
			pictitle.id = "11";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片11.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_12").onclick =  function () {
			pictitle.src = "img/pictitle/12.png";
			pictitle.id = "12";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片12.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_13").onclick =  function () {
			pictitle.src = "img/pictitle/13.png";
			pictitle.id = "13";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片13.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_14").onclick =  function () {
			pictitle.src = "img/pictitle/14.png";
			pictitle.id = "14";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片14.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_15").onclick =  function () {
			pictitle.src = "img/pictitle/15.png";
			pictitle.id = "15";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片15.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_16").onclick =  function () {
			pictitle.src = "img/pictitle/16.png";
			pictitle.id = "16";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片16.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_17").onclick =  function () {
			pictitle.src = "img/pictitle/17.png";
			pictitle.id = "17";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片17.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_18").onclick =  function () {
			pictitle.src = "img/pictitle/18.png";
			pictitle.id = "18";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片18.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_19").onclick =  function () {
			pictitle.src = "img/pictitle/19.png";
			pictitle.id = "19";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片19.1.png")
			document.getElementById("datasetpic2").setAttribute("src", "img/newdataset/图片19.2.png")
			document.getElementById("datasetpic2").style.display = ""
			}
		document.getElementById("catalogue_20").onclick =  function () {
			pictitle.src = "img/pictitle/20.png";
			pictitle.id = "20";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片20.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_21").onclick =  function () {
			pictitle.src = "img/pictitle/21.png";
			pictitle.id = "21";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片21.png")
			document.getElementById("datasetpic2").style.display = "none"
			}
		document.getElementById("catalogue_22").onclick =  function () {
			pictitle.src = "img/pictitle/22.png";
			pictitle.id = "22";
			document.getElementById("datasetpic").setAttribute("src", "img/newdataset/图片22.1.png")
			document.getElementById("datasetpic2").setAttribute("src", "img/newdataset/图片22.2.png")
			document.getElementById("datasetpic2").style.display = ""
			}
			
		document.getElementById("ye").onclick = function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Ye.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Ye.png";
			changecircle();
			//judgepic(src2);

		}
		
		document.getElementById("tian").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Tian.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Tian.png";
			changecircle();
			//judgepic(src2);

		}
		
		document.getElementById("da").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Da.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Da.png";
			changecircle();
			//judgepic(src2);
		
		}
		
		document.getElementById("shui").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Shui.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Shui.png";
			changecircle();
			//judgepic(src2);
		
		}
		
		document.getElementById("yi").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Yi.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Yi.png";
			changecircle();
			//judgepic(src2);
		
		}
		
		document.getElementById("yu").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Yu.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Yu.png";
			changecircle();
			//judgepic(src2);
		
		}
		
		document.getElementById("shan").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Shan.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Shan.png";
			changecircle();
			//judgepic(src2);
		
		}
		
		document.getElementById("you").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/You.png";
			src2 = "img/compared_pics/" + titleid + "/processed/You.png";
			changecircle();
			//judgepic(src2);
		
		}
	
		document.getElementById("zhi1").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Zhi.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Zhi.png";
			changecircle();
			//judgepic(src2);
		
		}
		document.getElementById("zhi2").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Zhi.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Zhi.png";
			changecircle();
			//judgepic(src2);
		
		}
		
		document.getElementById("ren1").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Ren.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Ren.png";
			changecircle();
			//judgepic(src2);
		
		}
		document.getElementById("ren2").onclick =function(){
			titleid = pictitle.getAttribute('id');
			judgeid(titleid);
			src1 = "img/compared_pics/compared_Wang/processed/Ren.png";
			src2 = "img/compared_pics/" + titleid + "/processed/Ren.png";
			changecircle();
			//judgepic(src2);
		
		}
		
	
	