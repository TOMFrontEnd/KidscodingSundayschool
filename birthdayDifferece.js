//计算还有多少天过生日
		function getDaysToBirthday(month,day){
			var now = new Date();
			var thisYear = now.getFullYear();
			//今年的生日
			var birthday = new Date(thisYear,month - 1,day);
			if(birthday < now){
				birthday.setFullYear(now.getFullYear()+1);
			}
			var timeDec = birthday - now;
			var days = timeDec / (24 * 60 * 60 * 1000);
			return Math.ceil(days);
		}
