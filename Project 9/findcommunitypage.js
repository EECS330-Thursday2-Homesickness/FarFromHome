function clickadd() {
	let addbutton = document.querySelector("#add");
		window.localStorage.clear();
		localStorage.setItem('communityCount', 0);
		localStorage.setItem('firstcommunity', "");
		window.document.location = './NewCommunity.html';
	
}

function createAccount() {
	
	if (document.getElementById("firstname").value == "Sally"){
		window.location.href= 'homepage.html';
	}
	else {
		window.location.href= 'homepage2.html';
	}
}

function createCommunityPage() {
	var dropdown = document.getElementById("optioncommunity");
	if (localStorage.getItem('communityCount') == 0) {
		if (dropdown.options[dropdown.selectedIndex].value == "family") {
			localStorage.setItem('communityCount', 1);
			localStorage.setItem('firstcommunity', 'family');
			window.document.location = './communitywithfamily.html';
		}
		else if (dropdown.options[dropdown.selectedIndex].value == "friend") {
			localStorage.setItem('communityCount', 1);
			localStorage.setItem('firstcommunity', 'friends');
			window.document.location = './communitywithfriends.html';
		}
		else {
			//do not let user move on without selecting
		}
	}
	else if (localStorage.getItem('communityCount') >= 1) {
		localStorage.setItem('communityCount', 2);
		window.document.location = './commfriendsandfamily.html';
	}
}



function goToCommunity(){
  if (localStorage.getItem('communityCount') == 0)
  {
    window.location.href='communities1.html';
  }
	else if (localStorage.getItem('communityCount') == 1)
  {
    if (localStorage.getItem('firstcommunity') == "friends")
    {
      window.location.href='communitywithfriends.html';
    }
    else {
      window.location.href='communitywithfamily.html';
    }
  }
  else
  {
    window.location.href='commfriendsandfamily.html';
  }
}

function goToFeed() {
	if (localStorage.getItem('communityCount') == 0)
  {
    //no feed yet because no communities
  }
	else if (localStorage.getItem('communityCount') == 1)
  {
    if (localStorage.getItem('firstcommunity') == "friends")
    {
      window.location.href='Friend Feed.html';
    }
    else {
      window.location.href='Family Feed.html';
    }
  }
  else
  {
    window.location.href='Family Feed.html';
  }
}

function goToFamilyFeed() {
	window.location.href='Family Feed.html';
}

function goToFriendFeed() {
	window.location.href='Friend Feed.html';
}