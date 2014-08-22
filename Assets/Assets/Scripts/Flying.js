#pragma strict

var cMotor : CharacterMotor;
var flyMode : boolean;

function Start () {
	cMotor = GetComponent(CharacterMotor);
	flyMode = false;
}

function Update () {

	if(Input.GetKeyUp("f")) {
		if(flyMode == true) {
			flyMode = false;
			Debug.Log("set to false");
		} else {
			flyMode = true;
			Debug.Log("set to true");
		}
	}
	
	if(flyMode == true) {
		cMotor.movement.gravity = 0;
	} else {
		cMotor.movement.gravity = 20;
	}
	
	if(flyMode == true) {
		if(Input.GetKey(KeyCode.Space)) {
			cMotor.SetVelocity(Vector3.up *5.5);
			//rigidbody.AddForce(Vector3.up *5.5);
		}
		if(Input.GetKey(KeyCode.LeftShift)) {
			cMotor.SetVelocity(Vector3.down *5.5);
			//rigidbody.AddForce(Vector3.down*5.5);
		}
	}
	
	

}

function OnExternalVelocity(){
}