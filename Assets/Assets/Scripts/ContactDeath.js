#pragma strict

var xPos : float = 0;
var yPos : float = 0;
var zPos : float = 0;

function OnControllerColliderHit (hit : ControllerColliderHit) {
	if(hit.gameObject.name == "DeathCube") {
		transform.position = Vector3(xPos, yPos, zPos);
	}
}
