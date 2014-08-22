#pragma strict

var xPos : float = 0;
var yPos : float = 0;
var zPos : float = 0;
var Timer = 0.0;
private var time : int;
private var displaySeconds : int;
private var displayMinutes : int;
private var displayMiliSec : int;
var text: String;

// JavaScript
function OnGUI () {
	GUI.Box (Rect (Screen.width - 310, 15, 300, 50), "<color=green><size=40>Time: "+text+"</size></color>");
}

function Update () {
//update time
	Timer += Time.deltaTime;
	
//convert time to int
	time = (Timer * 1000f);
	time = Mathf.Floor(time);
	//time = Mathf.CeilToInt(Timer);
	//Debug.Log(time);

//Convert time to milisec
	displayMiliSec = time;

//Convert time to sec
    displaySeconds = time / 1000;
    displaySeconds = displaySeconds % 60;
    
//Convert time to min
    displayMinutes = time / 1000* 60; 
    displayMinutes = displayMinutes % 60;

//Show time
 	text = String.Format ("{0:00}:{1:00}:{2}", displayMinutes, displaySeconds,displayMiliSec);
    //text = String.Format ("{0:00}:{1:00.0}", displayMinutes, displaySeconds);
    //Debug.Log(Timer);
    
}



function OnControllerColliderHit (hit : ControllerColliderHit) {
	if(hit.gameObject.name == "DeathCube") {
		transform.position = Vector3(xPos, yPos, zPos);
		Debug.Log(Timer);
		Timer = 0.0;
	}
}
