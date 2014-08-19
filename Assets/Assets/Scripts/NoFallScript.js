#pragma strict

var deathHeight : float = -5;

function Update() {

if(transform.position.y <= deathHeight){
 transform.position = Vector3(0,1,0);
}

}