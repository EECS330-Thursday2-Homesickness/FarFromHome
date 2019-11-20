localStorage.setItem("bar", "communityCount");
var communityCount = localStorage.getItem("bar");


var communityCount = 0;
var communityList = [];

function createAccount(){
	communityCount = 0;
	if (document.getElementById("firstname").value == "Sally"){
		window.location.href= 'homepage.html';
	}
	else {
		window.location.href= 'homepage2.html';
	}
}

function addToArray()
{
  if (communityCount >= 2)
  {
  goToCommunity();
}
  if (document.getElementById("optioncommunity").value == "family")
  {
    communityList[communityCount] = "family";
  }
  else {
    communityList[communityCount] = "friends";
  }

  communityCount++;

	if (communityList[0] == communityList[1])
	{
		communityCount = 1;
	}

  goToCommunity();


}

function goToCommunity(){
  if (communityCount == 0)
  {
    window.location.href='communities1.html';
  }
	else if (communityCount == 1)
  {
    if (communityList[0] == "friends")
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

delete window.communityCount;
